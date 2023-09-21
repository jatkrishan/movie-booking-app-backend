const ObjectId = require("mongoose").Types.ObjectId
const Theater = require("../model/thearter.model")
 
exports.validateBookingRequestBody = async (req, res, next) => {
    
    if(!ObjectId.isValid(req.body.theaterId)){
        return res.status(400).json({
            message: "Faild! theartreId is not a valid objectId" ,
        })
    }

    if(!ObjectId.isValid(req.body.moviesId)) {
        return res.status(400).json({message: "Failed! movieId is not a valid ObjectId!"})
    }
  
                    
    if(!req.body.timing){
        return res.status(400).json({message: "Faild! timing  doesn't provide in request "})
    }

     
    if(!req.body.noOfSeats ){
        return res.status(400).json({message: "Faild! noOfSeats  doesn't provide in request "})
    }
    next();

}

