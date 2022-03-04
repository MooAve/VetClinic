const express = require('express');
const app = express();
const mysql = require('mysql')

const db = mysql.createPool({
    connectionLimit : 10,
    host            : 'classmysql.engr.oregonstate.edu',
    user            : 'cs340_stoddjon',
    password        : '9198',
    database        : 'cs340_stoddjon'
})


app.get('/', (req, res)=> {

});

app.listen(3001, () => {
    console.log('running on port 3001')
});