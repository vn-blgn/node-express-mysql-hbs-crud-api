const express = require('express');
const router = express.Router();

const editController = require('../controllers/editController');

router.post('/', editController.edit_post);
router.get('/:id', editController.edit_get);

module.exports = router;