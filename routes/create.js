const express = require('express');
const router = express.Router();

const createController = require('../controllers/createController');

router.get("/", createController.create_get);
router.post("/", createController.create_post);

module.exports = router;