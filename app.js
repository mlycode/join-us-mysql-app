require("dotenv").config();

const express = require("express");
const faker = require("faker");

const mysql = require("mysql");

const app = express();
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASS,
    database: 'join_us'
});

connection.connect((error) => {
    if (error) {
        throw error;
    }
    console.log("MySQL Connected");
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

connection.end();

app.listen("3000", () => {
    console.log("server has started on port 3000");
});