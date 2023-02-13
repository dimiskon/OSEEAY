'use strict';

const Joi = require('joi');

const requestBody = Joi.object().keys({
  name: Joi.string().trim().required(),
  surname: Joi.string().trim().required(),
  unit: Joi.string().trim().valid('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ').required(),
  specialization: Joi.string().trim().required(),
  rank: Joi.string().trim().required(),
  mobile_phone: Joi.string().trim().required(),
  work_phone: Joi.string().trim().required(),
  position_of_responsibility: Joi.boolean(),
  is_special_category: Joi.boolean(),
  special_category: Joi.string().trim().valid('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ').allow(null),
  indefinitely: Joi.boolean(),
  mta_payment: Joi.boolean()
});

module.exports = requestBody;