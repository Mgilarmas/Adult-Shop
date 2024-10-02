const db = require("../models");
const Film = db.films;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const film = {
        title: req.body.title,
        genre: req.body.genre
    }

    Film.create(film).then((data) => {
        res.send(data);
    })
};

exports.findAll = (req, res) => {
    Film.findAll().then((data) => {
        res.send(data);
    })
};

exports.findOne = (req, res) => {
};

exports.update = (req, res) => {
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({where: {id: id}}).then(() => {
        console.log("Deleted");
        res.send("Deleted");
    })
};