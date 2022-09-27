function logErrors(err, req, res, next) {
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { statusCode, payload } = err.output;
    res.status(statusCode).json(payload);
  } else {
    next(err);
  }
}

export { logErrors, errorHandler, boomErrorHandler };
