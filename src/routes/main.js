const express = require('express');
const router = express.Router();
const {returnWelcomeMessage} = require('../controllers/main');

router.get('/', returnWelcomeMessage);

module.exports = router;