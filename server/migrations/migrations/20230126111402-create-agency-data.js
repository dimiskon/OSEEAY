'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('agency_data', {
      agency_id: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      base: {
        type: Sequelize.STRING,
        defaultValue: 'XXX',
        allowNull: false
      },
      moira: {
        type: Sequelize.STRING,
        allowNull: false
      },
      asma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'staffs',
          key: 'asma'
        }
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
    await queryInterface.dropTable('agency_data');
  }
};