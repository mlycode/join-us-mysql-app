require("dotenv").config();

const express = require("express");
const app = express();
const faker = require("faker");
const bodyParser = require("body-parser");
const mysql = require("mysql");

app.set("view engine", "ejs");
app.use (bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'join_us'
});

//Inserting 500 random users
// const userData = [];
// for (i = 0; i < 500; i++) {
//     userData.push([
//         faker.internet.email(),
//         faker.date.past()
//     ]);
// };
// const insertUsers = "INSERT INTO users (email, created_at) VALUES ?"
// connection.query(insertUsers, [userData], (err, results) => {
//     if (err) throw err;
//     console.log(results);
// });

//ROUTES
app.get("/", (req, res) => {
    const countUsers = "SELECT COUNT(*) AS total FROM users";
    connection.query(countUsers, (err, results) => {
        if (err) throw err;
        const totalUsers = results[0].total;
        // res.send("We have " + totalUsers + " users in our db");
        res.render("home", {totalUsers: totalUsers});
    });
});

app.post("/register", (req, res) => {
    const newUser = {
        email: req.body.email
    };
    const insertUser = "INSERT INTO users SET ?";
    connection.query(insertUser, newUser, (err, results) => {
        if (err) throw err;
        res.redirect("/");
    });
});

app.listen("3000", () => {
    console.log("server has started on port 3000");
});