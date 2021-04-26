const express = require('express');
const app = express()
const cors = require('cors')
const port =5000
const mysql = require('mysql');
const crypto = require("crypto");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1945",
    database: "dataroid" 
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

app.use(express.json())
app.use(cors());

// app.get('/employee', (req, res) => {
//     connection.query("SELECT * FROM user_details where username like '%san%';", (err, results, fields) => {
//         if(err) throw err;
//         res.send(results);
//         console.log("Employee fetched Successfully")
//     });
//     });

// app.get('/intern_employee', (req, res) => {
//     connection.query("SELECT * FROM user_details where user_id between 10 and 20;", (err, results, fields) => {
//         if(err) throw err;
//         res.send(results);
//         console.log("Intern Employee fetched Successfully");
//     });
// });

app.post("/login",(req,res) =>{
    const emailid = req.body.emailid;
    const passwordid = req.body.passwordid;
    const uniqueId = crypto.randomBytes(12).toString("hex");
    console.log(emailid,passwordid);
    connection.query(
        "INSERT INTO login(username,password,uniqueId) values(?,?,?)",
        [emailid,passwordid,uniqueId],
        (err,result) => {
            console.log(err);
        }
    )
})

app.get('/login', (req, res) => {
    connection.query("SELECT * FROM login;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
        console.log("Login Data fetched Successfully")
    });
});

app.listen(port, () => {
    console.log(`Application running ar http://localhost:${port}`)
})