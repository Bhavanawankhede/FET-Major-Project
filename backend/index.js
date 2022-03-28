const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();

app.use(cors());
app.use(bodyparser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'project'
})

db.connect((err) => {
    if (err) console.log(err);

    console.log("Connected..!");

})

app.get('/users', (req, res) => {
    let qr = `select * from users`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'All user data',
                data: result
            })
        }
    })
})

app.post('/users', (req, res) => {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let mobile = req.body.mobile;
    let password = req.body.password;
    let qr = `insert into users(firstname,lastname,email,mobile,password) values('${firstname}','${lastname}','${email}','${mobile}','${password}')`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'Data inserted',
                data: result
            })
        }
    })
})

app.post('/addquiz', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let categeory = req.body.categeory;
    let hours = req.body.hours;
    let minutes = req.body.minutes;
    let seconds = req.body.seconds;
    let question = req.body.question;
    let optiona = req.body.optiona;
    let optionb = req.body.optionb;
    let optionc = req.body.optionc;
    let optiond = req.body.optiond;
    let correctoption = req.body.correctoption;

    let qr = `insert into addquiz(title,description,categeory,hours,minutes,seconds,question,optiona,optionb,optionc,optiond,correctoption) values('${title}','${description}','${categeory}','${hours}','${minutes}','${seconds}','${question}','${optiona}','${optionb}','${optionc}','${optiond}','${correctoption}')`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'Data inserted',
                data: result
            })
        }
    })
})

app.post('/tictactoe', (req, res) => {
    let user = req.body.user;
    let status = req.body.status;

    let qr = `insert into tictactoe(user,status) values('${user}','${status}')`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'Data inserted',
                data: result
            })
        }
    })
})

app.get('/tictactoe', (req, res) => {
    let qr = `select count(*) as count from tictactoe`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'All user data',
                data: result
            })
        }
    })
})

app.get('/matchblock', (req, res) => {
    let qr = `select count(*) as count from matchblock`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'All user data',
                data: result
            })
        }
    })
}) 

app.get('/scoregameurl', (req, res) => {
    let qr = `select * from matchblock order by score desc limit 0,4`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'All user data',
                data: result
            })
        }
    })
})

app.post('/newquiz', (req, res) => {
    let queid = req.body.questions.quesId;
    let question = req.body.questions.question;
    let optiona = req.body.questions.option1;
    let optionb = req.body.questions.option2;
    let optionc = req.body.questions.option3;
    let optiond = req.body.questions.option4;
    let answer = req.body.questions.correctAnswer;
    let name = req.body.quiz_name;
    let categeory = req.body.quiz_cat_id;
    let description = req.body.description;
    let time = req.body.quiz_time;
    
    
    

    let qr = `insert into newquiz(queid,question,optiona,optionb,optionc,optiond,answer,name,categeory,description,time) values('${queid}','${question}','${optiona}','${optionb}','${optionc}','${optiond}','${answer}','${name}','${categeory}','${description}','${time}')`;
    db.query(qr, (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            res.send({
                message: 'Data inserted',
                data: result
            })
        }
    })
})



app.listen(8080, () => {
    console.log("server running");
})