var mongoose = require('mongoose')


var voteSchema = mongoose.Schema({
    event: {type: mongoose.Schema.Types.ObjectId, ref: 'Events'},
    date: Date,
    duration: Number,
    participants: Array,
})

var voteModel = mongoose.model('Votes', voteSchema);

module.exports = voteModel;