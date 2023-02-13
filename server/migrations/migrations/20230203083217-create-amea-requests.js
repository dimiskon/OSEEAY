'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('amea_requests', {
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
      created_at: {
        defaultValue: date,
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        defaultValue: date,
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('amea_requests');
  }
};