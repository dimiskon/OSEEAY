'use strict';

const errorHandler = (err, req, res, next) => {
  console.log('An ERROR found!!!');
  const errStatus = err.statusCode || 500;
  const errMsg = err.message || 'Something went wrong!';
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errMsg
  });

  next();
};

module.exports = errorHandler;