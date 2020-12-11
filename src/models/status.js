const mongoose = require('mongoose');

const statusSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    description: {
        type: String,
        required: true,
        maxlength: 500
    },
    type: {
        type: String,
        enum: ["Curse", "Sleep", "Poison"]
    },
    modifierValue: {
        type: Number
    },
    duration: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Status', statusSchema);