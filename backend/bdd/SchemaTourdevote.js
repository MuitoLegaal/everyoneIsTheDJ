var mongoose = require('mongoose')

var playlistSchema = mongoose.Schema({
    titre: String, //artist-titre
    votes: Number
})


var tourdevoteSchema = mongoose.Schema({
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Events'},
    date: Date,
    isOpen: Boolean,
    participants: Array,
    playlist: playlistSchema,
})

var tourdevoteModel = mongoose.model('Tourdevote', tourdevoteSchema);

module.exports = tourdevoteModel;