const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync().then(() => {
    console.log("database already synced")
})

app.get("/", (req, res) =>{
    res.json({ message: "Welcome to films application."});
});

require("./routes/film.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});