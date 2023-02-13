'use strict';

const Joi = require('joi');

const requestBody = Joi.object().keys({
  name: Joi.string().trim().required(),
  surname: Joi.string().trim().required(),
  unit: Joi.string().trim().valid('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ').required(),
  rank: Joi.string().trim().required(),
  specialization: Joi.string().trim().required(),
  mobile_phone: Joi.number().integer().required(),
  work_phone: Joi.number().integer().required(),
  position_of_responsibility: Joi.boolean(),
  is_special_category: Joi.boolean(),
  special_category: Joi.string().trim().valid('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ').allow(null),
  indefinitely: Joi.boolean(),
  mta_payment: Joi.boolean()
});

module.exports = requestBody;