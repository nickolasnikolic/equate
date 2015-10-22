var mongoose = require('mongoose');

var EquationSchema = mongoose.Schema({
    name: String,
    domain: String,
    equation: String,
    discoveredBy:String,
    submittedBy:String,
    lastEdited: Date,
    firstCreated: Date
});

var Equation = mongoose.model( 'Equation', EquationSchema );

module.exports = Equation;