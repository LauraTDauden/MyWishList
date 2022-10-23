const db = require("../model");
const Photo = db.photos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const photo = {
        description: req.body.description,
        filename: req.file ? req.file.filename : ""
    };

    Photo.create(photo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the photo."
            });
        });
};

exports.findAll = (req, res) => {
    Photo.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving photos."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Photo.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Photo with id ${id}`
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving the photo."
            });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Photo.update(req.body, {
        where: {id: id}
    })
    .then(updated => {
       if (updated == 1){
            res.send({
                message: "Photo was updated successfully!"
            });
       } else {
        res.send({
            message: `Photo couldn't be updated.`
        });
       }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Photo with id " + id
        });
    });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Photo.destroy({
        where: {id: id}
    })
    .then(deleted => {
       if (deleted == 1){
            res.send({
                message: "Photo was deleted successfully!"
            });
       } else {
        res.send({
            message: `Photo with id ${id} could not be deleted.`
        });
       }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Photo with id " + id
        });
    });
};


