
const constant = require("../unites/constant")
const User = require("../model/user.model")
const mongoose = require("mongoose")


validateSignUpRequest = async (req, res, next) => {

     if(!req.body.name || typeof(req.body.name) != "string"){
        return res.status(400).send({ success:false,message: "Faild! Name is not provided"})
     }

     if(!req.body.userId){
      return res.status(400).send({success:false, message: "Faild! userId is not provided"})
   }

     const userId = await User.findOne({userId: req.body.userId});
     console.log(userId)

     if(userId != null){
        return res.status(400).send({success:false, message: "Faild! userId already excit"})
     }

     if(!req.body.email){
        return res.status(400).send({success:false, message: "Faild! email is not provided"})
     } 

        const emailId = await User.findOne({email: req.body.email})
        if(emailId != null){
         return res.status(400).send({success:false, message: "Faild! emailId already excit"})
        }


     if(!req.body.userType || typeof(req.body.userType) != "string"){
        return res.status(400).send({success:false, message: "Faild! userType is not provided"})
     }
       
        const user = req.body.userType
       const userType = [constant.userType.admin, constant.userType.customer]
      
       if(user && !userType.includes(user)){
        return res.status(400).send({success:false, message: "Faild! userType is not provided"})
       }
       


    next()
    }
        
    const validateSignUpReqCheck = {
      validateSignUpRequest : validateSignUpRequest
    }
    module.exports = validateSignUpReqCheck;