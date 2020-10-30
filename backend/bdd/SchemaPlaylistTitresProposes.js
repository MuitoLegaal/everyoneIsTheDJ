var mongoose = require('mongoose')

var playlistSchema = mongoose.Schema({
    titre: String, //artist-titre
    votes: Array,
})

var playlistModel = mongoose.model('PlaylisTitresProposes', playlistSchema);

module.exports = playlistModel;