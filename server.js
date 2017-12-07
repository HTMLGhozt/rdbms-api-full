const express = require('express');
const bodyParser = require('body-parser');
const sqlite = require('sqlite3');

const routes = require('./api/routes.js');

const server = express();
server.use(bodyParser.json());

routes(server);

const port = 3030;
server.listen(port, () => {
  console.info('Server: ', port);
});
