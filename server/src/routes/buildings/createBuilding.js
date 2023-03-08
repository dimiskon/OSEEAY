'use strict';

const _ = require('lodash');

const createBuildingResponseSchema = require('../../joiSchemas/buildings/responses/createBuildingResponse');

module.exports = async(req, res, next) => {
  const db = _.get(req, 'db', null);
  const { buildings } = _.get(db, 'sequelize.models', {});
  const body = _.get(req, 'body', {});

  try {
    // Body Payload
    const payload = body;

    // Create Building
    const buildingRes = await buildings.create(payload);

    res.response_schema = createBuildingResponseSchema;
    res.response_body = buildingRes;
    next();
  } catch (error) {
    // Error handling
    next({
      message: error.original.sqlMessage,
      statusCode: 400
    });
  }
};