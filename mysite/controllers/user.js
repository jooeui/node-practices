module.exports = {
    join: function(req, res) {
        // routes에서 res.locals.req = req,
        // local에 applicationName(변수 이름)을 선언하면 해당 변수를 전역으로 사용 가능 
        // res.local.applicationName = '...'; 
        res.render('user/join');
    }
}