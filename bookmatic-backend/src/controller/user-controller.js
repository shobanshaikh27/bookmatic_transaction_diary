const UserService = require('../service/user-service.js');

const userService = new UserService();

const signUp = async (req,res)=>{
    try {
        const response = await userService.signUp({
            username : req.body.username , 
            password : req.body.password,
            fullname : req.body.fullname
        })
        return res.status(201).json({
            success : true , 
            message : "Successfully signUp a new user" , 
            data : response ,
            err : {
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            err: error ,
            message : "Something went wrong while signUp" ,
            success : false
        })
    }

}


const login = async (req,res)=>{
    try {
        const response = await userService.login({
            username : req.body.username , 
            password : req.body.password,
        })
        return res.status(201).json({
            success : true , 
            message : "Successfully login a user" , 
            data : response ,
            err : {
                
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            data : {},
            err: error ,
            message : "Something went wrong while login" ,
            success : false
        })
    }
}





module.exports = {
    signUp,
    login
}