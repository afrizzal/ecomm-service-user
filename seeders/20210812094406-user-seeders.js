'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('users', [
      {
        name: "aff",
        profession: "backend",
        role: "admin",
        email: "afrizzal@gmail.com",
        password: await bcrypt.hash('1n73GR!ya', 15),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "sholeh",
        profession: "frontend",
        role: "student",
        email: "sholeh@mailinator.com",
        password: await bcrypt.hash('Integriya2021', 15),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
