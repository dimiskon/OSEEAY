'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('houses_rent_history', {
      house_rent_history_id: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      potential_date_of_release: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: date
      },
      extention_date: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: date
      },
      date_of_release: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: date
      },
      house_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'houses',
          key: 'house_id'
        }
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

  async down (queryInterface) {
    await queryInterface.dropTable('houses_rent_history');
  }
};
