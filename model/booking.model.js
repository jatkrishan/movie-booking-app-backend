const mongoose = require("./index")

const bookingSchema = new mongoose.Schema({
    theaterId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Theater",
        required: true
    },
    moviesId: {
        type : mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    userId: {
        type : mongoose.Schema.Types.ObjectId,
         ref: "Users",
         required: true
    },
    status: {
        type: String,
        require: true,
        default: "IN_PROGRESS"
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: () => {return Date.now()}
    },
    updatedAt : {
        type: Date,
        default: () => {return Date.now()}
    } ,
    timing: {
        type: String,
        required: true,
      },
      noOfSeats: {
        type: Number,
        required: true,
      },
      totalCost: {
        type: Number,
      },
    },
      {
        versionKey: false
      }
)


module.exports = model("Booking", bookingSchema)