'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('houses_requests', {
      house_request_id: {
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
      is_approved: {
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

  async down (queryInterface) {
    await queryInterface.dropTable('houses_requests');
  }
};
