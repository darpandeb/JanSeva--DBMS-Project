var express = require('express');
var app = express();
var port = 8000;
const mysql = require("./connection").con

// Landing api response //
app.get('/', function(req, res) {
    res.send("<h1>JANSEVA BACKEND API !!!!</h1><h2>Pilgrimage Done </h2>");
    res.end();
});

// customer //

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


// priest //


// server listens at  //
app.listen(port, (err) => {
    if (err)
        throw err;
    else
        console.log("Server is running at port %d:", port);
});

