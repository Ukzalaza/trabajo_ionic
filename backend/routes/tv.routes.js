module.exports = app => {

    const tv = require("../controllers/tv.controllers.js");

    var router = require("express").Router();

    //Create a TV
    router.post("/", tv.create);

    //Retrieve all TVs
    router.get("/", tv.findAll);

    //Retrieve a single TV by ID
    router.get("/:id", tv.findOne);

    //Update a TV by ID
    router.put("/:id", tv.update);

    //Detele a TV by ID
    router.delete("/:id", tv.delete);

    app.use(`/api/tv`, router);




























};