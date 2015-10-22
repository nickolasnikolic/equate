var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name: String,
    email: String,
    equationsEdited: String
});

var User = mongoose.model( 'User', UserSchema );

module.exports = User;