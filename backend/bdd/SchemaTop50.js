
var mongoose = require('mongoose')


var top124Schema = mongoose.Schema({
    artist: String,
    title: String,
    style: String,
})

var top124Model = mongoose.model('top124', top124Schema)


module.exports = top124Model;