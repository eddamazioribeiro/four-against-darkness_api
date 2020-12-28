class GeneralError extends Error {
  constructor(errorMessage) {
    super();
    this.message = errorMessage;
  }

  getMessage() {
    return this.message;
  }

  getCode() {
    if (this instanceof BadRequest) {
      return 400;
    }

    if (this instanceof Unauthorized) {
      return 401;
    }

    if (this instanceof Forbbiden) {
      return 403;
    }

    if (this instanceof NotFound) {
      return 404;
    }

    if (this instanceof DatabaseError) {
      return 500;
    }

    if (this instanceof ValidationError || this instanceof ValidationFieldError) {
      return 400;
    }

    return 500;
  }
};

class BadRequest extends GeneralError {};

class Unauthorized extends GeneralError {};

class Forbbiden extends GeneralError {};

class NotFound extends GeneralError {};

class ValidationError extends GeneralError {};

class DatabaseError extends GeneralError {
  constructor(errorMessage, error) {
    super(errorMessage);
    this.errors = error.errors;
  }

  getMessage() {
    return this.errors;
  }
};

class ValidationFieldError extends GeneralError {
  constructor(errorMessage, fieldName) {
    super(errorMessage);
    this.fieldName = fieldName;
  }

  getMessage() {
    let messageAux = (!this.fieldName) ? '' : ` [${this.fieldName}]`;
    return this.message + messageAux;
  }
};

module.exports = {
  GeneralError,
  BadRequest,
  Unauthorized,
  Forbbiden,
  NotFound,
  DatabaseError,
  ValidationError,
  ValidationFieldError
};