'use strict';

const Joi = require('joi');

const responseBody = Joi.array().items({
  building_id: Joi.number().required().default(0),
  rent_price: Joi.number().integer().required(),
  apt_block: Joi.string().trim().required(),
  apt_no: Joi.string().trim().required(),
  surface_tm: Joi.number().positive().required(),
  is_occupied: Joi.boolean().required().default(false),
  created_at: Joi.date().timestamp().default(''),
  updated_at: Joi.date().timestamp().default('')
});

module.exports = responseBody;