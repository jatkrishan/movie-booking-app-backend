const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
   name: {
    type:String,
    required:true
   },
    userId:  {
    type: String,
    required: true
   },
   email: {
    type: String,
     required: true,
     lowercase: true,
     unique: true,
     required: 'Email address is required', 
   },
   password: {
           type: String,
           required: true
   },
   
   userStatus: {
       type:String,
       required:true,
       default: "APPROVED"
   },
   userType: {
          type: String,
          required: true,
          default: "CUSTOMER"
   },
   updatedAt : {
    type: Date,
    immutable: true,
    default: ()=>{return Date.now()}
   },
   createdAt: {
    type: Date,
    default: ()=>{return Date.now()}
   }

})


module.exports = mongoose.model("Users", userSchema)