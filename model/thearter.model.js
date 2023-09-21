const mongoose = require("mongoose")

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
    
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie" 
     }]
     ,

    createdAt: {
        type: Date,
        immutable: true,
        default: ()=>{return Date.now()}
    },
    updateAt: {
        type: Date,
        default: ()=>{return Date.now()}
    }

})

module.exports = mongoose.model("Thearter", theatreSchema)