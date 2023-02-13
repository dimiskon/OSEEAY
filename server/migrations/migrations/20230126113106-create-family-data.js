'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('family_data', {
      family_id: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      wife: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      wife_name: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      wife_surname: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null
      },
      wife_occupation: {
        type: Sequelize.STRING,
        allowNull: true
      },
      num_of_childs: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
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
    await queryInterface.dropTable('family_data');
  }
};