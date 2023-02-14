'use strict';

const Joi = require('joi');

const requestBody = Joi.object().keys({
  rent_price: Joi.number().integer().required(),
  apt_block: Joi.string().trim().required(),
  apt_no: Joi.string().trim().required(),
  surface_tm: Joi.number().positive().required()
});

module.exports = requestBody;