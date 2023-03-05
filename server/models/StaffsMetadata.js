'use strict';

module.exports = (sequelize, Sequelize) => {
  const staffs_metadata = sequelize.define('staffs_metadata', {
    staff_metadata_id: {
      type: Sequelize.INTEGER,
      allowNull: null,
      autoIncrement: true,
      primaryKey: true
    },
    points: {
      allowNull: false,
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    position_of_responsibility: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    special_category: {
      type: Sequelize.ENUM('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ'),
      allowNull: true,
      defaultValue: null
    },
    mta_payment: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    }
  }, {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    freezeTableName: true,
    name: {
      singular: 'staff_metadata',
      plural: 'staffs_metadata'
    }
  });

  staffs_metadata.associate = function(models) {
    // staffs_metadata <-1-----------------1-> staffs
    staffs_metadata.belongsTo(models.staffs, { foreignKey: { name: 'asma', allowNull: false }});
  };

  return staffs_metadata;
};