const express = require('express');
const controller = require('../controllers/guestbook.js');

const router = express.Router();
router.route('').get(controller.index);
router.route('/delete').get(controller._delete);

module.exports = router;