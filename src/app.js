const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
// routes
const mainRoutes = require('./routes/main');
const diceRoutes = require('./routes/dice');
const statusRoutes = require('./routes/status');

const app = express();

const PORT = process.env.DEFAULT_PORT;
const DB_CONNECTION = process.env.DB_CONN_STRING;

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routing
app.use('/api', mainRoutes);
app.use('/api', diceRoutes);
app.use('/api', statusRoutes);

// DB connection
mongoose.connect(DB_CONNECTION, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log(`Error connecting to the database:\n ${err}`)
});

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});