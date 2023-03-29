var express = require('express');
var app = express();
var port = 8000;
const mysql = require("./connection").con
require('dotenv').config();



//body parser//
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//stripe//
const Stripe = require('stripe')(process.env.SECKRET_KET);

//cors //
const cors = require('cors');
app.use(cors({
    origin: '*'
}));


// Landing api response //
app.get('/', function(req, res) {
    res.send("<h1>JANSEVA BACKEND API !!!!</h1><h2>Pilgrimage Done </h2>");
    res.end();
});

// pilgrimagess //

// pilgrimage on query params //
app.get("/pilgrimage", (req, res) => {
    var query = req.query;
    if(Object.keys(query).length ==0) // check length of query response //
    {
        var qry = "select * from pilgrimage";
        
    }
    else{
        var qry = "select * from pilgrimage where pilgID ="+req.query.pilID;
    }
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });
   
   

});
// pilgrimage using id //
app.get("/pilgrimage/:Pilid", (req, res) => {
    var id = req.params.Pilid;
    let qry = "select * from pilgrimage where pilgID =?";
    mysql.query(qry,[id] ,(err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });
});
// priest//
app.get("/priest", (req, res) => {
    var query = req.query;
    if(Object.keys(query).length ==0) // check length of query response //
    {
        var qry = "select * from priest";
        
    }
    else{
        var qry = "select * from priest where pilgID ="+req.query.pilID;
    }
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
});



// priest using pilg ID//
app.get("/priest/:Pilid", (req, res) => {
    var id = req.params.Pilid;
    let qry = "select * from priest where pilgID =?";
    mysql.query(qry,[id] ,(err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });
});
});


// package //

app.get("/package/:Pilid", (req, res) => {
    var id = req.params.Pilid;
    let qry = "select * from package where pilgID =?";
    mysql.query(qry,[id] ,(err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });
});


// place order //

app.get('/placeorder', (req, res) => {
    const pilgID = req.query.pilgID;
    const packID = req.query.packID;
    const qry = "SELECT pilgrimage.pilgName, pilgrimage.pilgLoc , pilgrimage.pilgCity, pilgrimage.pilgPin, pilgrimage.userExp , package.packName, package.packCost , package.packContent FROM package INNER JOIN pilgrimage ON package.pilgID=pilgrimage.pilgID where pilgrimage.pilgID = ? AND package.packID = ?"
    mysql.query(qry,[pilgID,packID] ,(err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });
});

//payment //

app.post('/payment', async(req, res) => {
    let state , error;
    const {token,amount}= req.body;
    // console.log(token);
    // console.log(amount);
    if(token)
    {
        state ='success';
    }
    else{
        state = 'error';
    }
    res.json({"status" : state});

 });



// user //

app.get('/admin/users', (req,res)=>
{
    var qry = "select * from customer"
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.send(results);
        }
    });

})



// server listens at  //
app.listen(port, (err) => {
    if (err)
        throw err;
    else
        console.log("Server is running at port %d:", port);
});

