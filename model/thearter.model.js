const mongoose = require("./index")

const theatreSchema = new mongoose.Schema ({
 
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pinCode: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        immutable: true,
        default: ()=>{return Date.now()}
    },
    updateAt: {
        type: Date,
        default: ()=>{return Date.now()}
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie" 
     }]


})

module.exports = mongoose.model("Thearter", theatreSchema)