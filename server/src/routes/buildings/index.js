'use strict';

const buildingsRouter = require('express').Router();

// Middlewares
const bodyValidator = require('../../middlewares/bodyValidator');
const retrieveEntryByPk = require('../../middlewares/retrieveEntryByPK');

// Routes
const createBuilding = require('./createBuilding');
const updateBuilding = require('./updateBuilding');
const findBuilding = require('./findBuilding');
const findAllBuildings = require('./findAllBuildings');
// Joi Schemas
// Requests
const createBuildingRequestSchema = require('../../joiSchemas/buildings/requests/createBuildingRequest');
const updateBuildingRequestSchema = require('../../joiSchemas/buildings/requests/updateBuildingRequest');

buildingsRouter.param('building_id', (req, res, next, building_id) => {
  req.building_id = building_id;
  next();
});

// Get All Buildings - /buildings
buildingsRouter.get('/', findAllBuildings);

// POST Building
buildingsRouter.post('/', bodyValidator(createBuildingRequestSchema), createBuilding);

// Router: /buildings/:asma
buildingsRouter.route('/:building_id')
  // PUT Building
  .put(retrieveEntryByPk({
    model_name: 'buildings',
    param_name: 'building_id',
    field_name: 'building'
  }), bodyValidator(updateBuildingRequestSchema), updateBuilding)
  // GET a Building
  .get(findBuilding);

module.exports = buildingsRouter;