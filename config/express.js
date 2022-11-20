require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');

module.exports = function(){
    const app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }))

    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: process.env.sessionSecret
    }));

    app.use(cors({ origin: '*'}));

    app.use(express.static('./public'));

    //Routes
    require('../app/routes/index.server.routes')(app);

    return app;
}
