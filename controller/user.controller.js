const User = require("../model/user.model")
const constant =require("../unites/constant")
const userObj = require("../unites/convertToUserObj")

exports.getAllUser = async (req,res) => {
    let user = await User.find({userType: constant.userType.customer})
    try{
    if(user){
        return res.status(200).send(userObj.userResponse(user))
       
    }if(!user){
        return res.status(400).send({message: "UserId doesn't excit"})
    }
    
}catch(error){
    res.status(500).send({
        message: "Some internal error occured while creating the user"
    })
    
}
}

exports.getUserById = async (req,res) => {
     const user = await User.findOne({userId: req.params.userId})
     try{
     if(user){
        return res.status(200).send(userObj.userResponse(user))
     }
     return res.status(400).send({message: "UserId doesn't excit"})
     }catch(error){
        res.status(500).send({
            message: "Some internal error occured while creating the user"
        })
     }

}

exports.updateUser = async (req,res) => {
    const user = await User.updateOne({userId: req.params.userId},
         {status: req.body.status}
         ).exec()
    
         const userStatus = [constant.userStatus.approved, constant.userStatus.pending, constant.userStatus.rejected]
    if(!userStatus.includes(req.body.status)){
        return res.status(400).send({message: "Error! user doesn't excit"})
    }
    try{
    if(user){
        return res.status(200).send({message: "User update successfully"})
     }
    }catch(error){
        res.status(500).send({
            message: "Some internal error occured while creating the user"
        })
    }



}

exports.deleteUser = async (req,res) => {
    
    const user = await User.deleteOne({userId: req.params.userId})
    try{
    if(user){
       return res.status(200).send({message: "Delete successful id"})
    }

    return res.status(400).send({message: "UserId doesn't excit"})

    }catch(error){

        res.status(500).send({
            message: "Some internal error occured while creating the user"
        })

    }

}