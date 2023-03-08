'use strict';

const _ = require('lodash');

const updateStaffResponseSchema = require('../../joiSchemas/staffs/responses/updateStaffResponse');

module.exports = async(req, res, next) => {
  const body = _.get(req, 'body', {});
  const asma = _.get(req, 'asma', null);
  const staff = _.get(req, 'staff', {});

  try {
    const staffRes = await staff.update(body, {
      where: { asma },
      plain: true,
    });
    // console.log(staffRes);
    res.response_schema = updateStaffResponseSchema;
    res.response_body = staffRes;
    next();
  } catch (error) {
    // Error handling
    console.log(error);
    next({
      message: error.original.sqlMessage,
      statusCode: 400
    });
  }
};