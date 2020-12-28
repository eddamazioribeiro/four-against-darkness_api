const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {DEFAULT_PORT} = require('../config/env');

const init = async (app) => {
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors());
};

const startServer = async (app) => {
  app.listen(DEFAULT_PORT, () => {
    console.log(`Application is running on port ${DEFAULT_PORT}`);
  });
}

module.exports = {init, startServer};