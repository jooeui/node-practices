const fs = require('fs');
const path = require('path');
const models = require('../models');

module.exports = {
    index: async function(req, res, next) {
        const results = await models.Gallery.findAll({
            attributes: ['no', 'url', 'comments'],
            order: [
                ['no', 'desc']
            ]
        });

        res.render('gallery/index', {results});
    },
    upload: async function(req, res, next) {
        try {
            const file = req.file;
            // console.log(file);
            if(file) {
                const contents = fs.readFileSync(file.path);
    
                const storeDirectory = path.join(path.dirname(require.main.filename), process.env.STATIC_RESOURCES_DIRECTORY, process.env.UPLOADIMAGE_STORE_LOCATION);
                const storePath = (path.join(storeDirectory, file.filename)) + path.extname(file.originalname);
                const url = path.join(process.env.UPLOADIMAGE_STORE_LOCATION, file.filename) + path.extname(file.originalname);
    
                // console.log(storeDirectory, storePath, url);
    
                fs.existsSync(storeDirectory) || fs.mkdirSync(storeDirectory);
                fs.writeFileSync(storePath, contents, {flag: 'w+'});
                fs.unlinkSync(file.path);

                await models.Gallery.create({
                    url: url.replace(/\\/gi, '/'),
                    comments: req.body.comments || ''
                })
            }
    
            res.redirect('/gallery');
        } catch(e) {
            next(e);
        }
    }
}