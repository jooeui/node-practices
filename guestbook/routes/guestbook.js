const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('').get(controller.index);
router.route('/add').post(controller.insert);
router.route('/delete/:no').get(controller.deleteform);
router.route('/delete/:no').post(controller.delete);

module.exports = router;