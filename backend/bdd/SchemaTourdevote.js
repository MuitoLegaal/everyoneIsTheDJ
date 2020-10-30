var mongoose = require('mongoose')

var playlistSchema = mongoose.Schema({
    artiste: String,
    titre: String,
})


var tourdevoteSchema = mongoose.Schema({
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Events'},
    date: Date,
    duration: Number,
    participants: Array,
    playlist: playlistSchema,
})

var tourdevoteModel = mongoose.model('Tourdevote', tourdevoteSchema);

module.exports = tourdevoteModel;