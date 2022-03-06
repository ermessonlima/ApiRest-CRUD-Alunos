const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'John Doe',
          email: 'teste@hotmail.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 2',
          email: 'teste2@hotmail.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'John Doe 3',
          email: 'teste3@hotmail.com',
          password_hash: bcryptjs.hashSync('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],

      {},
    );
  },

  down: () => {},
};
