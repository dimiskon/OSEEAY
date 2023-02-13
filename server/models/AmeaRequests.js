'use strict';

module.exports = (sequelize, Sequelize) => {
  const amea_requests = sequelize.define('amea_requests', {
    amea_request_id: {
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
    },
    amea_reassesment_request_date: {
      allowNull: false,
      type: Sequelize.DATE
    },
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true
  });

  amea_requests.associate = function(models) {
    // amea_requests <-1------------1-> staffs
    amea_requests.belongsTo(models.staffs, {
      foreignKey: { name: 'asma', allowNull: false }
    });
  };

  return amea_requests;
};