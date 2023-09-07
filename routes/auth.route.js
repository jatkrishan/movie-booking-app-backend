 const  {validateSignUpReqCheck}  = require("../middleware/index")
 const authController = require("../controller/auth.controller")

 module.exports =  function(app){
                   
          app.post("/movieBooking/auth/v1/signup" ,[validateSignUpReqCheck.validateSignUpRequest], authController.signup)
          app.post("/movieBooking/auth/v1/signin", authController.signin)
      }

