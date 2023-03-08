'use strict';

const Joi = require('joi');

const staff_metadata = Joi.object().keys({
  position_of_responsibility: Joi.boolean().required().default(false),
  special_category: Joi.string().trim().valid('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ').allow(null).required(),
  indefinitely: Joi.boolean().required().default(false),
  mta_payment: Joi.boolean().required().default(false)
}).required();

const requestBody = Joi.object().keys({
  name: Joi.string().trim().required(),
  surname: Joi.string().trim().required(),
  unit: Joi.string().trim().valid('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ').required(),
  specialization: Joi.string().trim().required(),
  rank: Joi.string().trim().required(),
  mobile_phone: Joi.string().trim().required(),
  work_phone: Joi.string().trim().required(),
  staff_metadata
});

module.exports = requestBody;