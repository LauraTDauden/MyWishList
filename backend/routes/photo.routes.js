module.exports = app => {
    const photos = require("../controller/photo.controller.js");
    var router = require("express").Router();
    var upload = require('../multer/upload');

    router.post("/", upload.single('filename'), photos.create);

    router.get("/", photos.findAll);

    router.get("/:id", photos.findOne);

    router.put("/:id", photos.update);

    router.delete("/:id", photos.delete);

    app.use('/api/photos', router);
}