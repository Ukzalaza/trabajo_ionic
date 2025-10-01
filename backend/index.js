const express = require("express");

const app = express();
// Prueba hecha
app.use(express.json());

app.use(express.urlencoded({ extende: true}));

app.get("/", (req, res) => {

    res.json({ message: "Welcome to TV application."});

});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {

    console.log(`Server is running in port ${PORT}.`);

} );