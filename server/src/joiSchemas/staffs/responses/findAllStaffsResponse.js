'use strict';

const Joi = require('joi');

const staff_metadata = Joi.object().keys({
  asma: Joi.number().integer().default(null),
  position_of_responsibility: Joi.boolean().default(false),
  special_category: Joi.string().trim().valid('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ').allow(null).default(null),
  indefinitely: Joi.boolean().default(false),
  mta_payment: Joi.boolean().default(false)
}).default({});

const staffs = Joi.array().items({
  asma: Joi.number().integer().default(null),
  display_name: Joi.string().trim().default(null),
  name: Joi.string().trim().default(null),
  surname: Joi.string().trim().default(null),
  unit: Joi.string().trim().valid('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ').default(null),
  specialization: Joi.string().trim().default(null),
  rank: Joi.string().trim().default(null),
  mobile_phone: Joi.string().trim().allow(null).default(null),
  work_phone: Joi.string().trim().allow(null).default(null),
  staff_metadata,
  created_at: Joi.date().timestamp().default(''),
  updated_at: Joi.date().timestamp().default('')
}).required();

const responseBody = Joi.object().keys({
  totalItems: Joi.number().integer().default(0),
  page: Joi.number().integer().default(1),
  offset: Joi.number().integer().default(0),
  staffs,
});

module.exports = responseBody;