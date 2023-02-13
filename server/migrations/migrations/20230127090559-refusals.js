'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('refusals', {
      refusal_id: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      asma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'staffs',
          key: 'asma'
        }
      },
      house_request_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'houses_requests',
          key: 'house_request_id'
        }
      },
      new_house_request_date: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: date
      },
      period: {
        type: Sequelize.ENUM('6 Months', '12 Months'),
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

  async down (queryInterface) {
    await queryInterface.dropTable('refusals');
  }
};
