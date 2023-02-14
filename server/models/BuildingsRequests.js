'use strict';

module.exports = (sequelize, Sequelize) => {
  const buildings_requests = sequelize.define('buildings_requests', {
    building_request_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    is_approved: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  buildings_requests.associate = function(models) {
    // buildings_requests <-*------------1-> staffs
    buildings_requests.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // buildings_requests <-1------------1-> refusals
    buildings_requests.hasOne(models.refusals, {
      foreignKey: { name: 'building_request_id', allowNull: true }
    });
  };

  return buildings_requests;
};