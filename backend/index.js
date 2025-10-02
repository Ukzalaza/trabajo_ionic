
const express = require("express");

const app = express();
// Prueba hecha
app.use(express.json());

app.use(express.urlencoded({ extended: true}));


const db = require("./models");

db.sequelize.sync({ force: true}) .then(() => {

    console.log("Drop and re-sync db.");

} );


app.get("/", (req, res) => {

    res.json({ message: "Welcome to TV application."});

});

    require("./routes/tv.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

    console.log(`Server is running in port ${PORT}.`);

} );

