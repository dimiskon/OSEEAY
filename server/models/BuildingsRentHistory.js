'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = (sequelize, Sequelize) => {
  const buildings_rent_history = sequelize.define('buildings_rent_history', {
    building_rent_history_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    potential_date_of_release: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: date
    },
    extention_date: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: date
    },
    date_of_release: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: date
    },
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  buildings_rent_history.associate = function(models) {
    // buildings_rent_history <-1------------*-> staffs
    buildings_rent_history.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // buildings_rent_history <-1------------*-> buildings
    buildings_rent_history.hasMany(models.buildings, {
      foreignKey: { name: 'building_id', allowNull: false }
    });
  };

  return buildings_rent_history;
};