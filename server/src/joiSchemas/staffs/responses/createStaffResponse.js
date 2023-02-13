'use strict';

const Joi = require('joi');

const responseBody = Joi.object().keys({
  asma: Joi.number().default(0),
  display_name: Joi.string().trim().default(null),
  name: Joi.string().trim().default(null),
  surname: Joi.string().trim().default(null),
  unit: Joi.string().trim().valid('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ').default(null),
  specialization: Joi.string().trim().default(null),
  rank: Joi.string().trim().default(null),
  mobile_phone: Joi.string().trim().default(null),
  work_phone: Joi.string().trim().allow(null).default(null),
  position_of_responsibility: Joi.boolean().default(false),
  is_special_category: Joi.boolean().default(false),
  special_category: Joi.string().trim().valid('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ').allow(null),
  indefinitely: Joi.boolean().default(false),
  mta_payment: Joi.boolean().default(false),
  created_at: Joi.date().timestamp().default(''),
  updated_at: Joi.date().timestamp().default('')
});

module.exports = responseBody;