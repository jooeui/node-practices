module.exports = function(role) {
    return function(req, res, next) {
        // 로그인 o
        if(req.session.authUser && (role !== 'ADMIN' || req.session.authUser.role === 'ADMIN')) {
            next();
            return;
        }

        // 로그인x, html -> 로그인 화면으로 redirect
        if(req.accepts('html')) {
            res.redirect(req.session.authUser ? '/' : '/user/login');
            return;
        }

        // 로그인x, html x
        res.status(403).send({
            result: 'fail',
            data: null,
            message: 'Access Denied'
        });
    }
}