const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();
// routes
const mainRoutes = require('./routes/main');

const app = express();

const PORT = process.env.DEFAULT_PORT;

app.use('/api', mainRoutes);

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});