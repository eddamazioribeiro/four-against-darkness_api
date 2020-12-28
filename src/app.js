
const express = require('express');
const initLoader = require('./loaders/index');
const mongooseLoader = require('./loaders/mongoose');
const routesLoader = require('./loaders/routes');

const app = express();

initLoader.init(app);
routesLoader.init(app);

initLoader.startServer(app).then(() => {
  mongooseLoader.connectToDatabase();
}).catch((err) => {
  console.log(`Error initializing the application: ${err}`);
});