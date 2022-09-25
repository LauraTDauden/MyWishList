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
        .then(data => {
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
    const id = req.params.id;
    Wish.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Wish with id ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the wish."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Wish.update(req.body, {
        where: {id: id}
    })
    .then(updated => {
       if (updated == 1){
            res.send({
                message: "Wish was updated successfully!"
            });
       } else {
        res.send({
            message: `Wish couldn't be updated.`
        });
       }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Wish with id " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Wish.destroy({
        where: {id: id}
    })
    .then(deleted => {
       if (deleted == 1){
            res.send({
                message: "Wish was deleted successfully!"
            });
       } else {
        res.send({
            message: `Wish with id ${id} could not be deleted.`
        });
       }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Wish with id " + id
        });
    });
};


