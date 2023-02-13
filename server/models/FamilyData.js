'use strict';

module.exports = (sequelize, Sequelize) => {
  const family_data = sequelize.define('family_data', {
    family_id: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    wife: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    wife_name: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    wife_surname: {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: null
    },
    wife_occupation: {
      type: Sequelize.STRING,
      allowNull: true
    },
    num_of_childs: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  family_data.associate = function(models) {
    // family_data <-1------------1-> staffs
    family_data.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // family_data <-1------------*-> childs_data
    family_data.belongsTo(models.childs_data, {
      foreignKey: { name: 'family_id', allowNull: false }
    });

  };

  return family_data;
};