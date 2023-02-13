'use strict';

const _ = require('lodash');

const bodyValidator = (bodySchema) => {
  return async(req, res, next) => {
    const body = _.get(req, 'body', {});
    try {
      const validated_body = await bodySchema.validateAsync(body, { abortEarly: false });
      console.log({ validated_body });
      req.body = validated_body;
      next();
    } catch (error) {
      const err = error.toString();
      console.log(err);
      next({
        message: err,
        statusCode: 400
      });
    }
  };
};

module.exports = bodyValidator;