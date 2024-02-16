const {  Transaction } = require('../models/index.js');
const userRepository = require('./user-Repository.js');
const {User} = require('../models/index.js');
const userRepo = new userRepository();


class TransactionRepository {
    constructor(){
        
    }
    async create(data) {
        try {
            const transaction = await Transaction.create({
                Amount: data.Amount,
                TransactionType: data.TransactionType,
                PartyName: data.PartyName,
                userId : data.userId     
            });
            

            return transaction;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async findById(Id) {
        try {

            const transaction = await Transaction.findByPk(Id);
            return transaction;

        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }

    async getAllTransactionsOfUser(id){
        try {
            const user = await User.findByPk(id);
        
            const transactions = await user.getTransactions();
            return transactions;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }




   


}

module.exports = TransactionRepository;