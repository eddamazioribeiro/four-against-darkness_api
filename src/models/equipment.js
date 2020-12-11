const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
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
        enum: ["Heavy", "Light"]
    },
    modifier: {
        type: Number,
        required: true
    },
    class: {
        type: String,
        enum: ["Armor", "Weapon"]
    },
    rarity: {
        type: Number,
        min: 0,
        max: 5,
        default: 1
    },
    notes: [{
        type: String,
        maxlength: 150
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Equipment', equipmentSchema);