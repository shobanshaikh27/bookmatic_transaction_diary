const {User} = require('../models/index');



class UserRepository{
    constructor(){

    }
    async create(data) {
        try {
            const user = await User.create({
                username: data.username,
                password: data.password,
                fullname: data.fullname
            });
           
            return user;
           
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }


    async getByUsername({username}){
        try {
            const user = await User.findOne({
                where:{
                    username
                }
            });
            return user.dataValues;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
 
    async getById(id){
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.log("Something went wrong on repository layer");
            throw error;
        }
    }
    
}

module.exports = UserRepository;