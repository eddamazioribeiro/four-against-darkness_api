const mongoose = require('mongoose');
const {DB_CONN_STRING} = require('../config/env');

const connectToDatabase = async () => {
  mongoose.connect(DB_CONN_STRING, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }).then(() => {
    console.log('DB connected');
  }).catch((err) => {
    console.log(`Error connecting to the database:\n ${err}`)
  });
};

module.exports = {connectToDatabase};
