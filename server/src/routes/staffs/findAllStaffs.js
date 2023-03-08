'use strict';

const _ = require('lodash');

const response_schema = require('../../joiSchemas/staffs/responses/findAllStaffsResponse');

module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);
  const { staffs, staffs_metadata } = _.get(db, 'sequelize.models', {});

  const staff_res = await staffs.findAll({
    include: [{
      model: staffs_metadata,
      required: true
    }]
  });

  if (staff_res) {
    res.response_schema = response_schema;
    res.response_body = staff_res;
    next();
  } else {
    next({
      statusCode: 401,
      message: `ERROR: Cannot find any staff members!`
    });
  }
};
