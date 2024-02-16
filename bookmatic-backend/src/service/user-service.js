const bcrypt = require('bcrypt');
const JWT = require("jsonwebtoken");
const userRepositroy = require("../repository/user-Repository.js");

class UserService{
    constructor(){
        this.UserRepositroy = new userRepositroy();
    }
    async signUp(data){
        try {
            const userData = await this.UserRepositroy.create(data);
            return userData;     
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw error;
        }
        
    }  


    checkPassword(userInputPlainPassword, encryptedPassword) {
        try {
            return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
        } catch (error) {
            console.log("Something went wrong while comparing passwords ");
            return error;
        }
    }

    async login(data){
        try {
            const userData = await this.UserRepositroy.getByUsername({username:data.username});
            
            if(userData==null){
                throw { message : "User doesn't exist"};
            }

            if(!this.checkPassword(data.password , userData.password)){
                throw { message : "Incorrect Password"};
            }

            const token = JWT.sign(userData,process.env.JWT_KEY,{expiresIn : '1d'});

            return token;
        } catch (error) {
            console.log("something went wrong in the service layer");
            throw error;
        }
    }
    
}

module.exports=UserService;