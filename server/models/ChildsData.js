'use strict';

module.exports = (sequelize, Sequelize) => {
  const childs_data = sequelize.define('childs_data', {
    child_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date_of_birth: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  childs_data.associate = function(models) {
    // childs_data <-*------------1-> staffs
    childs_data.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // childs_data <-*------------1-> family_data
    childs_data.belongsTo(models.family_data, {
      foreignKey: { name: 'family_id', allowNull: false }
    });
  };

  return childs_data;
};