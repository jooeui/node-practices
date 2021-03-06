const errorRoute = require('./error.js'); 

const applicationRouter = {
    setup: function(application) {
        
        // const site = models.Site.findOne();

        application
            .all('*', function(req, res, next){
                res.locals.req = req;
                res.locals.res = res;
                next(); // route는 계속 체인이 걸리기 때문에 next를 써줘야함!
            })

        .use('/', require('./main'))
        .use('/user', require('./user'))
        .use('/guestbook', require('./guestbook'))
        .use('/api/guestbook', require('./guestbook-api'))
        .use('/gallery', require('./gallery'))
        // .use('/board', require('./board.js'))

        // .use(function(req, res) {
        // })
        // .use(function(error, req, res, next) {  
        // })

        .use(errorRoute.error404)
        .use(errorRoute.error500)

        .siteTitle = 'MySite';  // 이게 진짜 전역..!!!!
    }
}

module.exports = { applicationRouter } 
