const model = require('../models/guestbook');

module.exports = {
    index: async function(req, res) {
        // res.render('index');
        const results = await model.findAll(function(){});
        // console.log(results);

        res.render('index', {
            list: results || []
        });
    },
    insert: async function(req, res) {
        // console.log(req.body);
        const results = await model.insert(req.body);

        res.redirect("/");
    },
    deleteform: async function(req, res) {
        res.render('deleteform', {
            no: req.params.no || 0
        });
    },
    delete: async function(req, res) {
        // console.log(req.body);
        const results = await model.delete(req.body);

        res.redirect("/");
    },
}