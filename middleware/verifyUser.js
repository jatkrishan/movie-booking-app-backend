
const jwt = require("jsonwebtoken")
const User = require("../model/user.model")
const config = require("../config/auth.config")
const constant = require("../unites/constant")

verifyToken = async(req, res, next) =>{
  
    let token = req.headers["x-access-token"]
   
    if(!token){
        return res.status(400).send({message: "Faild! Please provided a Token"})
    }
   
    jwt.verify(token, config.secretkey, (error, decoded) => {
        if(error){
            return res.status(401).send({message: "Request cannot be authenticated. Token is invalid"})   
             }

             req.userId = decoded.id
             
             next()


    })

}


isAdmin = async (req, res, next) => {
        
       const user = await User.findOne({
        userId: req.userId
       })
    
       if(user && user.userType === constant.userType.admin){
        next();
       }else{
        return res.status(403).send({message: "Only admins are allowed this operation"})
       }

}

isCustomer = async (req, res, next) => {
        
    const user = await User.findOne({
     userId: req.userId
    })
 
    if(user && user.userType === constant.userType.customer){
     next();
    }else{
     return res.status(403).send({message: "Only admins are allowed this operation"})
    }

}

isAdminAndCustomer = async (req, res, next) => {
        
    const user = await User.findOne({
     userId: req.userId
    })
 
    if(user && user.userType === constant.userType.admin || constant.userType.customer){
     next();
    }else{
     return res.status(403).send({message: "Only admins are allowed this operation"})
    }

}


const verifyUser = {
           
    isAdmin: isAdmin,
    verifyToken: verifyToken,
    isAdminAndCustomer: isAdminAndCustomer,
    isCustomer : isCustomer 

}

module.exports = verifyUser;