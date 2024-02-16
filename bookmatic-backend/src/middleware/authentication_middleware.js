const JWT = require('jsonwebtoken');
const UserRepository = require('../repository/user-Repository.js');
const userRepo = new UserRepository();



const isAuthenticated = async( req, res , next)=>{
    try {
        const token = req.headers['x-access-token'];
        const response = JWT.verify(token , process.env.JWT_KEY);
        const user = await userRepo.getById(response.id);
        if(!user){
            throw {
                message : "User not exist for given token"
            }
        }
        req.user = response  ; 
        next();

    } catch (error) {
        res.json({
            error : error 
        })
    }

}


module.exports = isAuthenticated;