const mongoose = require("mongoose");

const thearterSchema = mongoose.Schema ({
 
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
    pincode: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
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

module.exports = mongoose.model("thearter", thearterSchema)