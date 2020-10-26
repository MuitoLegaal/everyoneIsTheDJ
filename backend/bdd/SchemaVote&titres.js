var mongoose = require('mongoose')


var titreSchema = mongoose.Schema({
    artiste: String,
    titre: String,
})




var voteSchema = mongoose.Schema({
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Events'},
    date: Date,
    duration: Number,
    participants: Array,
    titres: titreSchema,
})

var voteModel = mongoose.model('Votes', voteSchema);

module.exports = voteModel;