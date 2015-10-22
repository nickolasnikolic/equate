var express = require('express');
var router = express.Router();

var Equation = require('../models/Equation');

/* GET home page. */
router.get('/', function(req, res, next) {
  Equation.find({},function(err, equations){
    res.render('equations', { title: 'boo', equations: equations });
  });
});

router.post('/', function(req,res){
  Equation({
    name: req.body.name || '',
    area: req.body.area || '',
    equation: req.body.equation || '',
    discoveredBy: req.body.discoveredBy || '',
    firstCreated: Date.now(),
    lastEdited: Date.now()
  }).save();
});

module.exports = router;
