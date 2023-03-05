'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('staffs_metadata', {
      staff_metadata_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      asma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'staffs',
          key: 'asma'
        }
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
    await queryInterface.dropTable('staffs_metadata');
  }
};