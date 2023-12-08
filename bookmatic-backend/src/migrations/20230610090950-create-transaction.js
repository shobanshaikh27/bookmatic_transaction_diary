'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Amount: {
        type: Sequelize.INTEGER
      },
      TransactionType: {
        type: Sequelize.ENUM('paid', 'received')
      },
      PartyName: {
        type: Sequelize.STRING
      },
      userId :{
        type : Sequelize.INTEGER,
        onDelete : "CASCADE" , 
        references : {
          model : "users",
          key : 'id',
          as : 'userId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transactions');
  }
};