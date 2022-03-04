const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_stoddjon',
    password        : '9198',
    database        : 'cs340_stoddjon'
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req, res) => {
    res.send("hello world");
    console.log("done")
});

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Pets";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post('/api/insert', (req, res)=> {
    
    console.log(req.body.name);

    const name = req.body.name;
    const species = req.body.species;
    const breed = req.body.breed;
    const birthYear = req.body.birthYear;
    const birthMonth = req.body.birthMonth;
    const birthDay = req.body.birthDay;
    const weight = req.body.weight;
    const sex = req.body.sex;
    const clientID = req.body.clientID;

    const sqlInsert = "INSERT INTO Pets (name, species, breed, birthYear, birthMonth, birthDay, weight, sex, clientID) VALUES (?,?,?,?,?,?,?,?,?)";

    db.query(sqlInsert, [name, species, breed, birthYear, birthMonth, birthDay, weight, sex, clientID], (err, result)=> {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});