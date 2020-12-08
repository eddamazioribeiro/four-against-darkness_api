const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.status(200).json({message: 'Four Against Darkness'});
});

app.listen(PORT, () => {
    console.log(`Application is running on port ${PORT}`);
});