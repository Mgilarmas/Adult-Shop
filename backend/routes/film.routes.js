module.exports = app => {
    const film = require("../controllers/film.controller.js");

    var router = require("express").Router();

    router.post("/", film.create);

    router.get("/", film.findAll);

    router.put("/", film.update);

    router.delete("/:id", film.delete);

    app.use("/api/film", router)
}