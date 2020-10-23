
var mongoose = require('mongoose')


var top50Schema = mongoose.Schema({
    artiste: String,
    titre: String,
})

var top50Model = mongoose.model('top50', top50Schema)

module.exports = top50Model;