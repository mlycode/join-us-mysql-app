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
    if(error) {
        throw error;
    }
    console.log("MySQL Connected");
});

connection.query('SELECT 1 + 1 AS solution', (error, results, fields) => {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
});

connection.end();

app.listen("3000", () => {
    console.log("server has started on port 3000");
});