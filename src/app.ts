const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const express = require('express');
const morgan = require('morgan');
const server = express();

require('./db');

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));

server.set('port', process.env.PORT || 3004);
server.use(express.json());

server.use('/', routes);
server.listen(server.get('port'), () => {
    console.log('Enhorabuenaaaa');
})

module.exports = server;