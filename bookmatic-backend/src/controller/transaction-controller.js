const TransactionService = require('../service/transaction-service.js');

const transactionService = new TransactionService();


const create = async(req,res)=>{
    try {
        const response = await transactionService.create({
            Amount : req.body.Amount , 
            TransactionType : req.body.TransactionType,
            PartyName : req.body.PartyName,
            userId : req.user.id
        })
        return res.status(201).json({
            success : true , 
            message : "Successfully created a transaction" , 
            data : response ,
            err : {
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            err: error ,
            message : "Something went wrong while creating a transaction" ,
            success : false
        })
    }
}


const getById = async(req,res)=>{
    try {
        const response = await transactionService.getById(req.params.id);
        return res.status(201).json({
            success : true , 
            message : "Successfully fetched a transaction" , 
            data : response ,
            err : {
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            err: error ,
            message : "Something went wrong while fetching a transaction" ,
            success : false
        })
    }
}

const getTransactions = async(req,res)=>{
    try {
        const response = await transactionService.transactionsOfUser(req.user.id);
        return res.status(201).json({
            success : true , 
            message : "Successfully fetched transactions of a user" , 
            data : response ,
            err : {
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            err: error ,
            message : "Something went wrong while fetching transactions of a user" ,
            success : false
        })
    }
}




module.exports = {
    create,
    getTransactions , 
    getById 
}