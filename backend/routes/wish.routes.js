module.exports = app => {
    const wishes = require("../controller/wish.controller.js");

    var router = require("express").Router();

    var upload = require('../multer/upload');

    router.post("/", upload.single('filename'), wishes.create);

    router.get("/", wishes.findAll);

    router.get("/:id", wishes.findOne);

    router.put("/:id", upload.single('filename'), wishes.update);

    router.delete("/:id", wishes.delete);

    app.use('/api/wishes', router);
}