import Joi from 'joi';

const staff_metadata = Joi.object().keys({
  points: Joi.number().integer().required().default(0),
  mta_payment: Joi.bool().default(false),
  special_category: Joi.string().valid("ΠΟΛΥΤΕΚΝΙΑ", "ΤΡΙΤΕΚΝΙΑ", "ΑΜΕΑ", "ΜΟΝΟΓΟΝΕΙΚΗ").allow(null).default(null)
});

const staffCreateSchema = Joi.object().shape({
  name: Joi.string().trim().pattern(/[a-zA-Z]+/).required(),
  surname: Joi.string().trim().pattern(/[a-zA-Z]+/).required(),
  asma: Joi.number().integer().min(5).max(5).required(),
  unit: Joi.string().valid("ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ", "ΣΤΡΑΤΟΣ ΞΗΡΑΣ", "ΠΟΛΕΜΙΚΟ ΝΑΥΤΙΚΟ").required(),
  mobile_phone: Joi.number().$_addRule().pattern(/69[0-9]{8}/).required(),
  work_phone: Joi.number().$_addRule().pattern(/[0-9]{4}/),
  staff_metadata
});

export default staffCreateSchema;