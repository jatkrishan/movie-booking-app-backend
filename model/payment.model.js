const mongoose = require("./index")

const paymentSchema = new model.Schema({
       bookingId: {
        type: [mongoose.Schema.Types.ObjectId],
          ref: "Booking",
          required: true
       } ,
       amount: {
        type: Number,
        required: true
       },
       status: {
        type: String,
        required: true
       },
       createdAt: {
        type: Date,
        immutable: true,
        default: ()=>{return Date.now()}
       },
       updatedAt: {
        type: Date,
        default: ()=>{return Date.now()}
       }

})

module.exports = mongoose.model("Pyment", paymentSchema)