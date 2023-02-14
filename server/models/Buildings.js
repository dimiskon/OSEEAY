'use strict';

module.exports = (sequelize, Sequelize) => {
  const buildings = sequelize.define('buildings', {
    building_id: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    rent_price: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    apt_block: {
      type: Sequelize.STRING,
      allowNull: false
    },
    apt_no: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surface_tm: {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0.0
    },
    is_occupied: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
  });

  buildings.associate = function(models) {
    // buildings <-1------------1-> staffs
    buildings.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: true, defaultValue: null }
    });

    // buildings <-1------------*-> buildings_rent_history
    buildings.hasMany(models.buildings_rent_history, {
      foreignKey: { name: 'building_id', allowNull: false }
    });
  };

  return buildings;
};