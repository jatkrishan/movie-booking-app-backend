
const constant = require("../unites/constant")
const User = require("../model/user.model")


validateSignUpRequest = async (req, res, next) => {

     if(!req.body.name){
        return res.status(400).send({message: "Faild! Name is not provided"})
     }

     if(!req.body.userId){
      return res.status(400).send({message: "Faild! userId is not provided"})
   }

     const userId = await User.findOne({userId: req.body.userId});
     if(userId != null){
        return res.status(400).send({message: "Faild! userId already excit"})
     }

     if(!req.body.email){
        return res.status(400).send({message: "Faild! email is not provided"})
     } 
     if(!req.body.userType){
        return res.status(400).send({message: "Faild! userType is not provided"})
     }
       
        const user = req.body.userType
       const userType = [constant.userType.admin, constant.userType.customer]
      
       if(user && !userType.includes(user)){
        return res.status(400).send({message: "Faild! userType is not provided"})
       }
       


    next()
    }
        
    const validateSignUpReqCheck = {
      validateSignUpRequest : validateSignUpRequest
    }
    module.exports = validateSignUpReqCheck;