'use strict';

const moment = require('moment');
const date = moment.utc().format('YYYY-MM-DD hh:mm:ss');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('houses', {
      house_id: {
        type: Sequelize.INTEGER,
        defaultValue: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      rent_price: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      apt_block: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apt_no: {
        type: Sequelize.STRING,
        allowNull: false
      },
      surface_tm: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
      },
      is_occupied: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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

  async down (queryInterface) {
    await queryInterface.dropTable('houses');
  }
};
