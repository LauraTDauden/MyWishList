module.exports = app => {
    const wishes = require("../controller/wish.controller.js");

    var router = require("express").Router();

    router.post("/", wishes.create);

    router.get("/", wishes.findAll);

    router.get("/:id", wishes.findOne);

    router.put("/:id", wishes.update);

    router.delete(":id", wishes.delete);

    app.use('/api/wishes', router);
}