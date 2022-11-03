
const jwt = require('jsonwebtoken');
const express = require("express");
const cors = require("cors");

const app = express();

var path = require('path');

var corsOptions = {
    origin: "http://localhost:8100"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//public directory
app.use(express.static(path.join(__dirname, 'public')));

const db = require ("./model");

db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.");
})

app.use(function (req, res, next) {
    var token = req.headers['authorization'];
    if(!token) return next();
    if(req.headers.authorization.indexOf('Basic') === 0) {
        const base64Credentials = req.headers.authorization.split(' ')[1];
        const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
        const[username, password] = credentials.split(':');

        req.body.username = username;
        req.body.password = password;

        return next();
    }
    token = token.replace('Bearer ', '');
    jwt.verify(token, process.env.JWT_SECRET, function (err, user){
        if(err){
            return res.status(401).json({
                error: true,
                message: "Invalid user."
            });
        } else {
            req.user = user;
            req.token = token;
            next();
        }
    });
});


app.get("/", (req, res) => {
    res.json({ message: "Welcome to MyWishList application."});
});

require("./routes/wish.routes")(app);
require("./routes/photo.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
