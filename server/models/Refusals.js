'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = (sequelize, Sequelize) => {
  const refusals = sequelize.define('refusals', {
    refusal_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    new_building_request_date: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: date
    },
    period: {
      type: Sequelize.ENUM('6 Months', '12 Months'),
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  refusals.associate = function(models) {
    // refusals <-*------------1-> staffs
    refusals.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // refusals <-1------------1-> buildings_requests
    refusals.belongsTo(models.buildings_requests, {
      foreignKey: { name: 'building_request_id', allowNull: false }
    });
  };

  return refusals;
};