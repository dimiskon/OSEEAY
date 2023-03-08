'use strict';

module.exports = (sequelize, Sequelize) => {
  const agency_data = sequelize.define('agency_data', {
    agency_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    base: {
      type: Sequelize.STRING,
      defaultValue: 'XXX',
      allowNull: false
    },
    moira: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  agency_data.associate = function(models) {
    // agency_data <-1------------1-> staffs
    agency_data.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });
  };

  return agency_data;
};