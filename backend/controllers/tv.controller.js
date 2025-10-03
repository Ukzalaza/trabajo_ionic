const db = require("../models");
const Tv = db.tv;
const Op = db.Sequelize.Op;

//Create and Save a new TV
exports.create = (req, res) => {

    if (!req.body.brand){

        res.status(400).send({
            message: "Content can not be empty"
        });
        return;
    }

    const tv = {

        brand: req.body.brand,
        model: req.body.model,
        inches: req.body.inches,
        scre: req.body.scre
    };

    Tv.create(tv)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error ocurred while creating the TV."
        });
    });


};


//Retrieve all TVs from the database
exports.findAll = (req, res) => {

    Tv.findAll()
    .then(data => {
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
                err.message || "Some error ocurred while retrieving TVs"
        });
    });

}


//Find a single TV with and ID
exports.findOne = (req, res) => {

    const id = req.params.id;

     Tv.findOne( {where: { id: id }})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tv with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tv with id=" + id
      });
    });

};


//Update a TV by the ID in the request
exports.update = (req, res) => {

    const id = req.params.id;

  Tv.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tv was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Tv with id=${id}. Maybe Tv was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tv with id=" + id
      });
    });

};


//Delete a TV with a specified ID in the request
exports.delete = (req, res) => {

    const id = req.params.id;

  Tv.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Tv was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Tv with id=${id}. Maybe Tv was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tv with id=" + id
      });
    });

};
