'use strict';

const { toInteger } = require('lodash');
const _ = require('lodash');
const { Op } = require('sequelize');

const response_schema = require('../../joiSchemas/staffs/responses/findAllStaffsResponse');

module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);
  const { staffs, staffs_metadata } = _.get(db, 'sequelize.models', {});

  // Query and Pagination Params
  const { limit = 20, page = 0, searchKey } = _.get(req, 'query', {});
  const offset = toInteger(page * limit);

  const { count, rows: allStaffs } = await staffs.findAndCountAll({
    where: {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${searchKey}%`
          }
        },
        {
          surname: {
            [Op.like]: `%${searchKey}%`
          }
        },
        {
          asma: {
            [Op.like]: `%${searchKey}%`
          }
        },
        {
          rank: {
            [Op.like]: `%${searchKey}%`
          }
        },
        {
          unit: {
            [Op.like]: `%${searchKey}%`
          }
        }
      ]
    },
    limit: toInteger(limit),
    offset,
    include: [{
      model: staffs_metadata,
      required: true
    }],
  });
  const allStaffsRaw = allStaffs.map(staff => staff.get({ plain: true }));

  if (allStaffsRaw) {
    res.response_schema = response_schema;
    res.response_body = {
      totalItems: count,
      offset: page * limit,
      staffs: allStaffsRaw
    };
    next();
  } else {
    next({
      statusCode: 401,
      message: `ERROR: Cannot find any staff members!`
    });
  }
};
