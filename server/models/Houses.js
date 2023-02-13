'use strict';

module.exports = (sequelize, Sequelize) => {
  const houses = sequelize.define('houses', {
    house_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
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

  houses.associate = function(models) {
    // houses <-1------------1-> staffs
    houses.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // houses <-1------------*-> houses_rent_history
    houses.hasMany(models.houses_rent_history, {
      foreignKey: { name: 'house_id', allowNull: false }
    });
  };

  return houses;
};