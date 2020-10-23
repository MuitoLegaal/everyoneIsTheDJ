var mongoose = require('mongoose')


var eventSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotes'},
    nameEvent: String,
    date: Date,
    isOpen: Boolean,
    participants: Array,
})

var top50Model = mongoose.model('Events', top50Schema)

module.exports = top50Model;