'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('childs_data', {
      child_id: {
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
      asma: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'staffs',
          key: 'asma'
        }
      },
      family_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'family_data',
          key: 'family_id'
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: date
      },
      updated_at: {
        defaultValue: date,
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('childs_data');
  }
};