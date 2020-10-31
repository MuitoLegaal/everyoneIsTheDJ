
var mongoose = require('mongoose')


var top124Schema = mongoose.Schema({
    chanson: String,
})

var top124Model = mongoose.model('TOP124simplifie', top124Schema)


module.exports = top124Model;