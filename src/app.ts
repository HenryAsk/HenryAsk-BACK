const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const express = require('express');
const server = express();

require('./db');

server.set('port', process.env.PORT || 3004);
server.use(express.json());


server.use('/', routes);
server.listen(server.get('port'), () => {
    console.log('Enhorabuenaaaa');
})

module.exports = server;