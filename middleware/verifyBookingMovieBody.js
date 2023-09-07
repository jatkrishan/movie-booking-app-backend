const ObjectId = require("mongoose").Types.ObjectId
const Theater = require("../model/thearter.model")

exports.validateBookingRequestBody = async (req, res, next) => {
    if(!req.body.theatreId) {
        return res.status(400).send({
            message: "Faild! theatreId is required"
        })
    }
  
    if(ObjectId.isValid(req.body.theatreId)){
        return res.status(400).send({
            message: "Faild! theartreId is not a valid objectId" ,
        })
    }

    if(!req.body.movieId){
        return res.status(400).send({message: "Faild! movieId is requird!"})

    }

    if(!ObjectId.isValid(req.body.movieId)) {
        return res.status(400).send({message: "Failed! movieId is not a valid ObjectId!"})
    }
  
    const theater = await Theater.findOne({_id: req.body.theatreId})

    if(!theater){
        return res.status(400).send({message: "ThearterId  doesn't excit"})
    }
    if(req.body.timing){
        return res.status(400).send({message: "Faild! timing  doesn't provide in request "})
    }
    if(req.body.noOfSeats){
        return res.status(400).send({message: "Faild! noOfSeats  doesn't provide in request "})
    }
    next();

}

