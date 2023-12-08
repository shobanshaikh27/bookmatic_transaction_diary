const TransactionRepository = require("../repository/transaction-Repository");

class TransactionService{
    constructor(){
        this.transactionRepository = new TransactionRepository();
    }

    async create(data){
        try {
            const transaction = await this.transactionRepository.create(data);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }

    async getById(id){
        try {
            const transaction = await this.transactionRepository.findById(id);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }

    async transactionsOfUser(id){
        try {
            const transaction = await this.transactionRepository.getAllTransactionsOfUser(id);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }

    async update(id , data){
        try {
            const transaction = await this.transactionRepository.update(id , data);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }

    async delete(id){
        try {
            const transaction = await this.transactionRepository.delete(id);
            return transaction;
        } catch (error) {
            console.log("something went wrong in service layer");
            throw error ;
        }
    }

}



module.exports = TransactionService;