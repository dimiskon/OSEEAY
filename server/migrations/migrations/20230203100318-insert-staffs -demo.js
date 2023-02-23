'use strict';

module.exports = {
  async up (queryInterface) {
    let arr = [];
    for (let index = 0; index < 20; index++) {
      arr.push({
        asma: Math.floor((Math.random() * 10000) + 1),
        unit: 'ΠΟΛΕΜΙΚΗ ΑΕΡΟΠΟΡΙΑ',
        name: 'Ιωάννης',
        surname: 'Ρόβας',
        specialization: 'ΕΟΠΛ',
        rank: 'Υποσμηναγός',
        display_name: 'Υποσμηναγός (ΕΟΠΛ) Ιωάννης Ρόβας',
        mobile_phone: '1234567890',
      });
    }

    return await queryInterface.bulkInsert('staffs', arr);
  },

  async down (queryInterface) {
    return await queryInterface.bulkDelete('staffs');
  }
};
