'use strict';

module.exports = (sequelize, Sequelize) => {
  const houses_requests = sequelize.define('houses_requests', {
    house_request_id: {
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

  houses_requests.associate = function(models) {
    // houses_requests <-*------------1-> staffs
    houses_requests.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // houses_requests <-1------------1-> refusals
    houses_requests.hasOne(models.refusals, {
      foreignKey: { name: 'house_request_id', allowNull: true }
    });
  };

  return houses_requests;
};