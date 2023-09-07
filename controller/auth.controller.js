const User = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const authRoute = require("../routes/auth.route")
const authConfig = require("../config/auth.config")
const constants = require("../unites/constant")

exports.signup = async (req, res) => {
   
      try{
        const createUser = await User.create({
            name: req.body.name,
            userId: req.body.userId,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            userType: req.body.userType,
            userStatus: req.body.userStatus
        })
        const postResponce = {
            name: createUser.name,
            userId: createUser.userId,
            userType: createUser.userType,
            userStatus: createUser.userStatus,
            email: createUser.email,
            createdAt: createUser.createdAt,
            updatedAt: createUser.updatedAt
        }
           
       return res.status(200).send(postResponce)

    }catch(error){
        return res.status(500).send({message:  "Some internal error occured while creating the user ", error})
    }

}

exports.signin = async (req, res) => {
   const user = await User.findOne({userId: req.body.userId})
   if(!user){
    return res.status(400).send({message: "Faild! userId doesn't excit"})
   }

   if(user.userStatus != constants.userStatus.approved){
    res.status(403).send({
        message: "Can't allow user to login as the status is " + user.userStatus
    })
    return;
}


   var isPassworldValid = bcrypt.compareSync(req.body.password, user.password)

   if(!isPassworldValid){
    return res.status(400).send({message: "Faild! password is invalid"})
   }

   var token = jwt.sign({id: user.userId}, authConfig.secretkey, {
    expiresIn: 86400
   })

   res.status(200).send({
    name: user.name,
    userId: user.userId,
    email: user.userId,
    userType: user.userType,
    userStatus: user.userStatus,
    accessToken: token
   })
}



