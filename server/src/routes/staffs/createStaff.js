'use strict';

const _ = require('lodash');

const createStaffResponseSchema = require('../../joiSchemas/staffs/responses/createStaffResponse');

module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);
  const asma = _.get(req, 'asma', null);
  const { staffs } = _.get(db, 'sequelize.models', {});
  const body = _.get(req, 'body', {});

  try {
    // Body Payload
    const payload = body;
    payload.display_name = body.rank + ` (${body.specialization})` + ' ' + body.surname + ' ' + body.name;
    payload.asma = asma;

    // Create Staff
    const staffRes = await staffs.create(body);

    res.response_schema = createStaffResponseSchema;
    res.response_body = staffRes;
    next();
  } catch (error) {
    // Error handling
    next({
      message: error.original.sqlMessage,
      statusCode: 400
    });
  }
};