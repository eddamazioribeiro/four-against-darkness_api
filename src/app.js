const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
// routes
const mainRoutes = require('./routes/main');
const diceRoutes = require('./routes/dice');

const app = express();

const PORT = process.env.DEFAULT_PORT;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routing
app.use('/api', mainRoutes);
app.use('/api', diceRoutes);

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});