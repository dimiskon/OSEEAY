'use strict';

const _ = require('lodash');

const response_schema = require('../../joiSchemas/staffs/responses/findAllStaffsResponse');

module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);
  const { staffs } = _.get(db, 'sequelize.models', {});

  const staffRes = await staffs.findAll();
  if (staffRes) {
    res.response_schema = response_schema;
    res.response_body = staffRes;
    next();
  } else {
    next({
      statusCode: 401,
      message: `ERROR: Cannot find any staff members!`
    });
  }
  next();
};
