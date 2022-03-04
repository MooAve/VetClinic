const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit : 10,
    host            : '',
    user            : '',
    password        : '',
    database        : ''
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req, res) => {
    res.send("hello world");
    console.log("done")
});

app.get("/pets/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Pets";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/pets/insert", (req, res) => {
    
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
    db.query(sqlInsert, [name, species, breed, birthYear, birthMonth, birthDay, weight, sex, clientID], (err, result) => {
        console.log(err);
    });
});

app.get("/clients/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Clients";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/clients/insert", (req, res) => {
    console.log(req.body.lname);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const address = req.body.address;
    const phone = req.body.phone;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO Clients (fname, lname, address, phone, email) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [fname, lname, address, phone, email], (err, result) => {
        console.log(err);
    });
});

app.get("/prescriptions/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Prescriptions";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/prescriptions/insert", (req, res) => {
    console.log(req.body.date);

    const date = req.body.date;
    const drug = req.body.drug;
    const dosage = req.body.dosage;
    const petID = req.body.petID;
    const doctorID = req.body.doctorID;

    const sqlInsert = "INSERT INTO Prescriptions (date, drug, dosage, petID, doctorID) VALUES (?,?,?,?,?)";
    db.query(sqlInsert, [date, drug, dosage, petID, doctorID], (err, result) => {
        console.log(err);
    });
});

app.get("/doctors/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Doctors";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/doctors/insert", (req, res) => {
    console.log(req.body.lname);

    const fname = req.body.fname;
    const lname = req.body.lname;
    const phone = req.body.phone;
    const email = req.body.email;

    const sqlInsert = "INSERT INTO Doctors (fname, lname, phone, email) VALUES (?,?,?,?)";
    db.query(sqlInsert, [fname, lname, phone, email], (err, result) => {
        console.log(err);
    });
});

app.get("/clients_doctors/get", (req, res) => {
    const sqlSelect = "SELECT * FROM Clients_Doctors";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

app.post("/clients_doctors/insert", (req, res) => {
    console.log(req.body.clientID);

    const clientID = req.body.clientID;
    const doctorID = req.body.doctorID;

    const sqlInsert = "INSERT INTO Clients_Doctors (clientID, doctorID) VALUES (?,?)";
    db.query(sqlInsert, [clientID, doctorID], (err, result) => {
        console.log(err);
    });
});

app.listen(3001, () => {
    console.log("running on port 3001");
});