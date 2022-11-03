require('dotenv').config();

const HOST = process.env.DB_HOST;
const USER = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const DB = process.env.DB_NAME;

module.exports = {
    HOST: HOST,
    USER: USER,
    PASSWORD: PASSWORD,
    DB: DB,
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

// module.exports = {
//     HOST: "localhost",
//     USER: "root",
//     PASSWORD: "admin",
//     DB: "db_wishlist",
//     dialect: "mysql",
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// };



