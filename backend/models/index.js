const express = require("express");

const app = express();
// Prueba hecha
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

const db = require("./index.js");

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

const dbConfig = requier("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {

    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,

    pool: {

        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle

    }
});


    const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tv = require("./tv.model.js")(sequelize, Sequelize);

module.exports = db;