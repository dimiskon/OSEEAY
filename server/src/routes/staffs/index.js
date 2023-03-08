'use strict';

const staffsRouter = require('express').Router();

// Middlewares
const bodyValidator = require('../../middlewares/bodyValidator');
const retrieveEntryByPk = require('../../middlewares/retrieveEntryByPK');

// Routes
const createStaff = require('./createStaff');
const updateStaff = require('./updateStaff');
const findStaff = require('./findStaff');
const findAllStaffs = require('./findAllStaffs');
// Joi Schemas
// Requests
const createStaffRequestSchema = require('../../joiSchemas/staffs/requests/createStaffRequest');
const updateStaffRequestSchema = require('../../joiSchemas/staffs/requests/updateStaffRequest');

staffsRouter.param('asma', (req, res, next, asma) => {
  req.asma = asma;
  next();
});

// Get All Staffs - /staffs
staffsRouter.get('/', findAllStaffs);
// Router: /staffs/:asma
staffsRouter.route('/:asma')
  // POST Staff
  .post(retrieveEntryByPk({
    model_name: 'staffs',
    param_name: 'asma',
    field_name: 'staff',
  }), bodyValidator(createStaffRequestSchema), createStaff)
  // PUT Staff
  .put(retrieveEntryByPk({
    model_name: 'staffs',
    param_name: 'asma',
    field_name: 'staff'
  }), bodyValidator(updateStaffRequestSchema), updateStaff)
  // GET a Staff
  .get(findStaff);

module.exports = staffsRouter;