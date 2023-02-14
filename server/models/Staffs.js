'use strict';

module.exports = (sequelize, Sequelize) => {
  const staffs = sequelize.define('staffs', {
    asma: {
      type: Sequelize.INTEGER,
      defaultValue: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    surname: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    unit: {
      type: Sequelize.ENUM('ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ', 'ΣΤΡΑΤΟΣ ΞΗΡΑΣ', 'ΝΑΥΤΙΚΟ'),
      allowNull: false
    },
    specialization: {
      type: Sequelize.STRING,
      allowNull: false
    },
    rank: {
      type: Sequelize.STRING,
      allowNull: false
    },

    display_name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    mobile_phone: {
      type: Sequelize.STRING,
      allowNull: false
    },
    work_phone: {
      type: Sequelize.STRING,
      allowNull: true
    },
    position_of_responsibility: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    is_special_category: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
    special_category: {
      type: Sequelize.ENUM('ΠΟΛΥΤΕΚΝΙΑ', 'ΤΡΙΤΕΚΝΙΑ', 'ΑΜΕΑ', 'ΜΟΝΟΓΟΝΕΙΚΗ'),
      allowNull: true,
      defaultValue: null
    },
    indefinitely: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false
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
  });

  staffs.associate = function(models) {
    // staffs <-1------------1-> agency_data
    staffs.hasOne(models.agency_data, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------1-> family_data
    staffs.hasOne(models.family_data, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------*-> buildings_requests
    staffs.hasMany(models.buildings_requests, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------1-> buildings
    staffs.hasOne(models.buildings, {
      foreignKey: { name: 'asma', allowNull: true, defaultValue: null }
    });

    // staffs <-1------------*-> buildings_rent_history
    staffs.hasMany(models.buildings_rent_history, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------*-> refusals
    staffs.hasMany(models.refusals, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------*-> childs_data
    staffs.hasMany(models.childs_data, {
      foreignKey: { name: 'asma', allowNull: false }
    });

    // staffs <-1------------1-> amea_requests
    staffs.hasOne(models.amea_requests, {
      foreignKey: { name: 'asma', allowNull: false }
    });

  };

  return staffs;
};