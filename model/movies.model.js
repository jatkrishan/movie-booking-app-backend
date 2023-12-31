const mongoose = require("mongoose")

const moviseSchema = new mongoose.Schema ({
    name : {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    director : {
        type: String,
        require: true
    },
    posterUrl : {
                type: String,
                require: true
    },
     trailerUrl : {
          type: String,
           require: true
},

    langauge: {
             type: [String],
             require: true
    },
    casts: {
        type: [String],
        require: true
    },
    releaseDate: {
         type: Date,
         require: true
    },
    releaseStatus: {
        type: String,
        require: true,
        default: "RELEASED"
    },
    updateAt: {
        type: Date,
        default: () => { return Date.now() }
    },

})

module.exports = mongoose.model("Movie", moviseSchema)