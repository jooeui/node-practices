const express = require('express');
const controller = require('../controllers/gallery.js');

const router = express.Router();
router.route('').get(controller.index);
router.route('/upload').post(controller.upload);


module.exports = router;