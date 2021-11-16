const model = require('../models/emaillist');

module.exports = {
    index: function(req, res) {
        const result = module.findAll();
        res.render('index', {
            list: result || []
        });
    }
}