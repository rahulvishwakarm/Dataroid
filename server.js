const express = require('express');
const app = express()
const cors = require('cors')
const port =5000
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1945",
    database: "biprac" 
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(cors());

app.get('/employee', (req, res) => {
    connection.query("SELECT * FROM user_details where username like '%san%' and  user_id%3=0;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
        console.log("Employee fetched Successfully")
    });
    });

app.get('/intern_employee', (req, res) => {
    connection.query("SELECT * FROM user_details where user_id between 10 and 20;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
        console.log("Intern Employee fetched Successfully");
    });
    });

app.listen(port, () => {
    console.log(`Application running ar http://localhost:${port}`)
})