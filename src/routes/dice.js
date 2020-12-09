const express = require('express');
const router = express.Router();
const {rollDices} = require('../controllers/dice');

router.post('/dice/roll', rollDices);

module.exports = router;