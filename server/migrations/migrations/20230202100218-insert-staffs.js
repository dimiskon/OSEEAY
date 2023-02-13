'use strict';

module.exports = {
  async up (queryInterface) {
    return await queryInterface.bulkInsert('staffs', [{
      asma: 12345,
      unit: 'ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ',
      name: 'Ιωάννης',
      surname: 'Ρόβας',
      specialization: 'ΕΟΠΛ',
      rank: 'Υποσμηναγός',
      display_name: 'Υποσμηναγός (ΕΟΠΛ) Ιωάννης Ρόβας',
      mobile_phone: '1234567890',
    }]);
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.bulkDelete('staffs', {
      asma: {
        [Sequelize.Op.in]: [
          12345
        ]
      }
    });
  }
};
