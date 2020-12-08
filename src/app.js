const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const PORT = process.env.DEFAULT_PORT;

app.get('/', (req, res) => {
    res.status(200).json({message: 'Four Against Darkness'});
});

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});