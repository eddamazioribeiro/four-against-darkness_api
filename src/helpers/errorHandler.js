const {GeneralError} = require('./error');

const errorHandler = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return res.status(err.getCode()).json({
      success: false,
      data: err.getMessage()
    });
  }

  return res.status(500).json({
    success: false,
    data: err.getMessage()
  });
}

module.exports = errorHandler;