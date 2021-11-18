const express = require('express');
const controller = require('../controllers/guestbook.js');

const router = express.Router();
router.route('').get(controller.index);
router.route('/delete/:no').get(controller.delete);
router.route('/delete').post(controller._delete);
router.route('/insert').post(controller._insert);

module.exports = router;