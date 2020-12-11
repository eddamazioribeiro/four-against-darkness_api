const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
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
    modifierType: {
        type: String,
        enum: ["Atk", "Def", "Effect"]
    },
    modifierValue: {
        type: Number
    },
    range: {
        type: Number,
        min: 1,
        max: 4
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Skill', skillSchema);