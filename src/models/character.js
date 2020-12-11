const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const characterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32
    },
    class: {
        type: ObjectId,
        ref: 'Class',
        required: true
    },
    lvl: {
        type: Number,
        required: true,
        default: 1
    },
    hp: {
        type: Number,
        required: true
    },
    xp: {
        type: Number,
        required: true
    },
    atk: {
        type: Number,
        required: true
    },
    def: {
        type: Number,
        required: true
    },
    status: [{
        type: ObjectId,
        ref: 'Status'
    }],
    skills: [{
        type: ObjectId,
        ref: 'Skill'
    }],
    equipment: [{
        type: ObjectId,
        ref: 'Equipment'
    }],
    money: {
        type: Number,
        default: 0,
        min: 0,
        max: 200
    },
    inventory: [{
        type: ObjectId,
        ref: 'Items'
    }],
    notes: [{
        type: String,
        maxlength: 150
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Character', characterSchema);