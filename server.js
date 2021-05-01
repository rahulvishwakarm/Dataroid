const express = require('express');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
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
    console.log(emailid,passwordid);
    connection.query(
        "INSERT INTO login(username,password) values(?,?)",
        [emailid,passwordid],
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

app.post("/register",(req,res) =>{
    const ui_regemail = req.body.ui_regemail;
    const ui_companyname = req.body.ui_companyname;
    const ui_phone = req.body.ui_phone;
    const ui_regpassword = req.body.ui_regpassword;
    const uniqueId = crypto.randomBytes(12).toString("hex");
    connection.query(
        "INSERT INTO register(emailid,company,phone,password,uniqueId) values(?,?,?,?,?)",
        [ui_regemail,ui_companyname,ui_phone,ui_regpassword,uniqueId],
        (err,result) => {
            console.log(err);
        }
    )
})

app.get('/register', (req, res) => {
    connection.query("SELECT * FROM register;", (err, results, fields) => {
        if(err) throw err;
        res.send(results);
        console.log("Registered User Fetched Succesfully")
    });
});

if(process.env.NODE_ENV ==="production") {
    app.use(express.static('dataroidui/build'));
}

app.listen(port, () => {
    console.log(`Application running ar http://localhost:${port}`)
})