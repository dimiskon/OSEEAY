'use strict';

const _ = require('lodash');

const response_schema = require('../../joiSchemas/staffs/responses/findStaffResponse');
module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);

  const { staffs } = _.get(db, 'sequelize.models', {});
  const asma = _.get(req, 'asma', null);

  const staffRes = await staffs.findByPk(asma);

  if (!staffRes) {
    const error = {
      message: `Cannot find staff member with ASMA of ${asma}`,
      status: 401
    };
    next(error);
  } else {
    res.response_schema = response_schema;
    res.response_body = staffRes;
    next();
  }
};
