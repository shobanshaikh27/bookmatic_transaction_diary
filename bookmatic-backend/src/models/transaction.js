'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User , {
        foreignKey : 'userId',
        onDelete : 'CASCADE'
      })
    }
  }
  transaction.init({
    Amount: DataTypes.INTEGER,
    TransactionType: DataTypes.ENUM('paid', 'received'),
    PartyName: DataTypes.STRING,
    userId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return transaction;
};