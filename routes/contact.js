var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Contact = require('../models/Contact.js');

router.post('/store', (req, res) => {
    var myData = new Contact(req.body);
    myData.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save data to the database");
        });
});

module.exports = router;