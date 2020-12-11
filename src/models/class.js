const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const classSchema = new mongoose.Schema({
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
    initHP: {
        type: Number,
        required: true
    },
    initAtk: {
        type: Number,
        required: true
    },
    initDef: {
        type: Number,
        required: true
    },
    initEquip: [{
        type: ObjectId,
        ref: 'Equipment',
        required: true
    }],
    initMoney: {
        type: Number,
        required: true
    },
    skills: [{
        type: ObjectId,
        ref: 'Skill',
        required: true
    }],
    notes: [{
        type: String,
        maxlength: 150
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('Class', classSchema);