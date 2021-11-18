const logger = require('../logging');

module.exports = {
    error404: function(req, res) {
        if(req.accepts('html')) {
            res.status(404).render('error/404');
            return;
        }

        res.status(404).send({
            result: 'false',
            data: null,
            message: 'unknown request'
        });
    },
    error500: function(error, req, res, next) {
        logger.error(error.stack);
        
        if(req.accepts('html')){
            res.status(500).send(`<pre>${err.stack}</pre>}`);
        }
        
        res.status(500).send({
            result: 'false',
            data: null,
            message: 'unknown request'
        });
    }
}