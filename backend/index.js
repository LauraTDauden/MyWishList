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


app.get("/", (req, res) => {
    res.json({ message: "Welcome to MyWishList application."});
});

require("./routes/wish.routes")(app);
require("./routes/photo.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
