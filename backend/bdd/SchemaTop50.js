
var mongoose = require('mongoose')


var top50Schema = mongoose.Schema({
    artiste: String,
    titre: String,
})

// var top500Schema = mongoose.Schema({
//     classement: Number,
//     artiste: String,
//     titre: String,
//     annee: Number,
// })

// var top124Schema = mongoose.Schema({
//     artist: String,
//     title: String,
//     style: String,
// })

var top50Model = mongoose.model('top50', top50Schema)
// var top50Model = mongoose.model('TOP500', top500Schema)
// var top50Model = mongoose.model('TOP124maxime', top124Schema)

module.exports = top50Model;