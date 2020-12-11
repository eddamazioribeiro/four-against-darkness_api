const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const itemSchema = new mongoose.Schema({
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
    isConsumable: {
        type: Boolean,
        required: true
    },
    skill: {
        type: ObjectId,
        ref: 'skill'
    },
    value: {
        type: Number,
        required: true,
        default: 0
    },
    rarity: {
        type: Number,
        min: 0,
        max: 5,
        default: 1
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);