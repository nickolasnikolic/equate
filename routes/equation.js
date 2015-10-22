var express = require('express');
var router = express.Router();

var Equation = require('../models/Equation');

/* GET home page. */
router.get('/:id', function(req, res, next) {
  Equation.findOne({
    id: req.param.id
  },function(err, equation){
    console.log(equation);
    res.render('equation', { title: 'boo', equation: equation });
  });
});
/*
router.post('/', function(req,res){
  Equation({
    name: req.body.name || '',
    area: req.body.area || '',
    equation: req.body.equation || '',
    discoveredBy: req.body.discoveredBy || '',
    firstCreated: Date.now(),
    lastEdited: Date.now()
  }).save();
  res.redirect('/equations');
});
*/
module.exports = router;
