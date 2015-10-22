var mongoose = require('mongoose');

var EquationSchema = mongoose.Schema({
    name: String,
    area: String,
    equation: String,
    discoveredBy:String,
    lastEdited: Date,
    firstCreated: Date
});

var Equation = mongoose.model( 'Equation', EquationSchema );

module.exports = Equation;