'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffs', {
      asma: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
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
        allowNull: true
      },
      work_phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: date
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: date
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('staffs');
  }
};