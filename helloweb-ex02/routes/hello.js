const express = require('express');

const router = express.Router();

router.route("/01").get(function(req, res){
    res.render('hello/01');
});

router.route("/02").get(function(req, res){
    const data = {
        no: req.query.no || '', // RequestParam 이랑 비슷
        email: req.query.email || ''
    };

    res.render('hello/02', data);
});

module.exports = router;