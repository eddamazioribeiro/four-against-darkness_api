const mainRoutes = require('../routes/main');
const diceRoutes = require('../routes/dice');
const statusRoutes = require('../routes/status');
const errorHandler = require('../helpers/errorHandler');1

const init = async (app) => {
  app.use('/api', mainRoutes);
  app.use('/api', diceRoutes);
  app.use('/api', statusRoutes);

  // error handler middleware should be the last one here
  app.use(errorHandler);
}

module.exports = {init}