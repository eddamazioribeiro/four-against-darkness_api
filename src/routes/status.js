const express = require('express');
const router = express.Router();
const {
  createStatus,
  findStatusById,
  listAllStatus,
  updateStatus,
  deleteStatus,
  deleteAllStatus
} = require('../controllers/status');

router.post('/status', createStatus);
router.get('/status/:statusId', findStatusById);
router.get('/status', listAllStatus);
router.put('/status/:statusId', updateStatus);
router.delete('/status/:statusId', deleteStatus);
router.delete('/status', deleteAllStatus);

module.exports = router;