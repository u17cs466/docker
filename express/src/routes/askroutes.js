const express = require('express');
const router = express.Router();
const askcontroller = require('../controllers/askcontroller');

router.route('/')
    .post(askcontroller.askData)
router.route('/image')
    .post(askcontroller.ImagetUrl)
module.exports = router;