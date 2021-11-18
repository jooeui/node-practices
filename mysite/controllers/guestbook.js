const moment = require('moment');
const models = require('../models');

module.exports = {
    index: function(req, res, next) {
        try {
            const results = models.Guestbook.findAll({
                attributes: ['', '', ''],
                order: [
                    ['no', 'desc']
                ]
            });

            res.render('guestbook.index', {results, moment});
            //  moment(vo.regDate).format('YYYY-MM-DD hh:mm:ss') 
        } catch(e) {
            next(e);
        }
    },
    _delete: function(req, res, next) {
        try {
            models.Guestbook.destroy({
                // no: req.body.no
                where: req.body     // body에 no, password를 받아오니까 req.body만 써줘도 됨!!!!
            });
            
            res.redirect('/');
        } catch(e) {
            next(e);
        }
    }
}