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
    const id = req.params.id;
  
    Film.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Film was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Film with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Film with id=" + id
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({where: {id: id}}).then(() => {
        console.log("Deleted");
        res.send({message:"Deleted"});
    })
};