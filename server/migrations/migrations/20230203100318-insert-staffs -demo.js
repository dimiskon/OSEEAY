'use strict';

module.exports = {
  async up (queryInterface) {
    let staffs = [];
    let staffs_metadata = [];

    for (let index = 0; index < 20; index++) {
      const asma = Math.floor((Math.random() * 10000) + 1);
      staffs.push({
        asma,
        unit: 'ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ',
        name: 'Ιωάννης',
        surname: 'Ρόβας',
        specialization: 'ΕΟΠΛ',
        rank: 'Υποσμηναγός',
        display_name: 'Υποσμηναγός (ΕΟΠΛ) Ιωάννης Ρόβας',
        mobile_phone: '1234567890',
      });

      staffs_metadata.push({
        asma,
        staff_metadata_id: index + 1
      });

    }
    return await queryInterface.sequelize.transaction(async(transaction) => {
      try {
        await queryInterface.bulkInsert('staffs', staffs, { transaction });
        await queryInterface.bulkInsert('staffs_metadata', staffs_metadata, { transaction });
      } catch (error) {
        console.error(error);
        await transaction.rollback();
      }
    });
  },

  async down (queryInterface) {
    return await queryInterface.sequelize.transaction(async(transaction) => {
      try {
        await queryInterface.bulkDelete('staffs_metadata', { transaction });
        await queryInterface.bulkDelete('staffs', { transaction });
      } catch (error) {
        console.error(error);
        return error;
      }
    });
  }
};
