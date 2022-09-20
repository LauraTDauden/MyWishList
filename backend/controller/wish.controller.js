const db = require("../model");
const Wish = db.wishes;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.item) {
        res.status(400).send({
            message: "Content cannot be empty!"
        });
        return;
    };

    const wish = {
        item: req.body.item,
        description: req.body.description
    };

    Wish.create(wish)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the wish."
            });
        });
};

exports.findAll = (req, res) => {
    Wish.findAll()
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving wishes."
            });
        });
};

exports.findOne = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
};

