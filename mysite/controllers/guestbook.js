const moment = require('moment');
const models = require('../models');

module.exports = {
    index: async function(req, res, next) {
        // res.render('guestbook/index');
        try {
            const results = await models.Guestbook.findAll({
                attributes: ['no', 'name', 'regDate', 'message'],
                order: [
                    ['no', 'desc']
                ]
            });

            res.render('guestbook/index', {results, moment});
        } catch(e) {
            next(e);
        }
    },
    _insert: async function(req, res, next) {     // post로 넘어오는 친구
        try {
            await models.Guestbook.create(req.body);
            
            res.redirect('/guestbook');
        } catch(e) {
            next(e);
        }
    },
    delete: async function(req, res) {
        res.render('guestbook/delete', {
            no: req.params.no
        });
    },
    _delete: async function(req, res, next) {
        try {
            await models.Guestbook.destroy({
                // no: req.body.no
                where: req.body     // body에 no, password를 받아오니까 req.body만 써줘도 됨!!!!
            });
            
            res.redirect('/guestbook');
        } catch(e) {
            next(e);
        }
    },
    spalanding: function(req, res) {
        res.render('guestbook/index-spa');
    }
}