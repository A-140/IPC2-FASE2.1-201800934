var mysql = require('mysql');
const express = require("express");
const bodyparser = require("body-parser");
//const cor = require('cor');

const app = express();
app.use(bodyparser.json());
app.set('port', process.env.PORT || 5000);

app.use(function(req, res, next)
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headerss", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const conexion = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"201800934usac",
        database:"Proyecto"
    }
    );


    app.listen(app.get('port'), () => 
    {
        console.log('Server on port', app.get('port'));
    }
    );
