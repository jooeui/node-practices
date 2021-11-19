const http = require('http');
const path = require('path');
const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const multer = require('multer');


// 1. Environment Variables
dotenv.config({path: path.join(__dirname, 'config/app.env')});
dotenv.config({path: path.join(__dirname, 'config/db.env')});

// 2. Application Routers
const {applicationRouter} = require('./routes');

// 3. Logger
const logger = require('./logging');

// 4. Application Setup
const application = express()
    // 4-1. Session Environment
    .use(session({
        secret: "mysite-session",
        resave: false
    }))

    // 4-2. static resources
    .use(express.urlencoded({extended: true}))  // application/x-www-form-urlencoded
    .use(express.json())                        // application/json
    
    // 4-3. Multipart
    .use(multer({
        dest: path.join(__dirname, process.env.MULTER_TEMPORARY_STORE)
    }).single('file'))
    
    // 4-4. request body parser
    .use(express.static(path.join(__dirname, process.env.STATIC_RESOURCES_DIRECTORY)))

    // 4-5. view engine setup
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    
// 5. Application Router Setup
applicationRouter.setup(application)

// Server Setup
http.createServer(application)
    .on('listening', function() {
        logger.info(`http server runs on ${process.env.PORT}`);
    })
    .on('error', function(error) {
        switch(error.code){
            case 'EACCESS':
                logger.error(`${process.env.PORT} requires privileges`);
                process.exit(1);    // 0: 정상종료, 1: 비정상종료
                break;
            case 'EADDINUSE':
                logger.error(`${process.env.PORT} is already in use`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    })
    .listen(process.env.PORT);