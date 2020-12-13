const express = require('express');
const router = express.Router();
const {
    create,
    findById, 
    update,
    remove,
    list} = require('../controllers/status');

router.post('/status', create);
router.get('/status/:statusId', findById);
router.get('/status', list);
router.put('/status/:statusId', update);
router.delete('/status/:statusId', remove);

module.exports = router;