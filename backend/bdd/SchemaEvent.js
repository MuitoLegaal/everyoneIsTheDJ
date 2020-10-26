var mongoose = require('mongoose')


var eventSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'Hotes'},
    nameEvent: String,
    date: Date,
    isOpen: Boolean,
    participants: Array,
})

var eventModel = mongoose.model('Events', eventSchema)

module.exports = eventModel;