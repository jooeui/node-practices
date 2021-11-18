const models = require('../models');
module.exports = {
    joinsuccess: function(req, res) {
        res.render('user/joinsuccess');
    },
    join: function(req, res) {
        // routes에서 res.locals.req = req,
        // local에 applicationName(변수 이름)을 선언하면 해당 변수를 전역으로 사용 가능 
        // res.local.applicationName = '...'; 
        res.render('user/join');
    },
    _join: async function(req, res, next) {     // post로 넘어오는 친구
        try {
            await models.User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                gender: req.body.gender
            });
            
            res.redirect('/user/joinsuccess');
        } catch(e) {
            next(e);
        }
        // console.log(req.body);
    },
    login: function(req, res) {
        res.render('user/login');
    },
    _login: async function(req, res, next) {
        try{
            const user = await models.User.findOne({
                attributes: ['no', 'name', 'role'],
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            });
            if(user == null) {
                res.render('user/login', Object.assign(req.body, {result: 'fail'}));
            }

            // 세션 처리
            req.session.authUser = user;

            res.redirect('/');
        } catch(e) {
            next(e);
        }
    },
    logout: async function(req, res, next) {
        try {
            await req.session.destroy();
            res.redirect('/');
        } catch(e) {
            next(e);
        }
    },
    update: async function(req, res, next) {
        try {
            const user = await models.User.findOne({
                attributes: ['no', 'email', 'name', 'gender'],
                where: {
                    no: req.session.authUser.no
                }
            })
            res.render('user/update', {user});
        } catch(e) {
            next(e);
        }
    },
    _update: async function(req, res, next) {
        
    }
}