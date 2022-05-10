const express = require('express');
const router = express.Router();

const deleteController = require('../controllers/deleteController');

router.post('/:id', deleteController.delete_post);

module.exports = router;