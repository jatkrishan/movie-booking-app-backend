const Booking = require("../model/booking.model")
const  constant = require("../unites/constant")
const User = require("../model/user.model")
const bookingModel = require("../model/booking.model")

exports.createMovie = async (req, res) => {
     const user = await User.findOne({userId: req.userId})
  const  bookingObj = {
        theaterId: req.body.theaterId,
        moviesId: req.body.moviesId,
        userId: user._id,
        timing: req.body.timing,
        noOfSeats: req.body.noOfSeats,
        totalCost: req.body.noOfSeats * constant.price.ticketPrice
     }
     
    try{
      const booking = await Booking.create(bookingObj)
      console.log(booking)
      if(booking){
            return res.status(200).json(bookingObj)
        }

    }catch(error){
        return res.status(500).send({message: "Some internal error occured"})
    }

}

exports. getAllMovieByUser = async (req, res) => {
    const user = await User.findOne({userId: req.userId})
    try{
  
        const booking = await Booking.find({userId: user._id})
       
        if(booking){
          return res.status(200).json(booking)
        }
     
      
      }catch(error){
        console.log(user)
        return res.status(500).send({message: "Some internal error occured"})
   
    }



}

exports.getAllMovieByAdmin= async (req, res) => {  
    
    const user = await User.find({userId: req.userId})
    try{

        const quaryObj = {}

        if(user.userType == constant.userType.admin){
        }else{
            quaryObj.uerId = user._id
        }

        const booking = await Booking.find(quaryObj)
        return res.status(200).send(booking)
      
      }catch(error){
       
        return res.status(500).send({message: "Some internal error occured"})
   
    }

}


exports.getbyIdMovie = async (req, res) => {
    const user = await User.findOne({userId: req.usrId})
  
    
    try{
        const booking = await Booking.findOne({_id: req.params.id})
      
          if(booking.userId != user._id){
            return res.status(400).send({message: "access denied"})
          }
      
         return res.status(200).send(booking)
      


      }catch(error){
       
        return res.status(500).send({message: "Some internal error occured"})
   
    }


}

exports.UpdateByMovie = async (req, res) => {
     const user = await User.findOne({usrId: req.userId})
    
     const booking = await Booking.findOneAndUpdate({_id : req.params.id})
     
     if (booking === null || booking === undefined) {
        return res.status(404).send({
          message: 'Booking not found',
        })}

        if (booking.userId != user._id) {
            return res.status(404).send({
              message: 'Access Denied.',
            })
           }

        booking.theaterId = req.body.theaterId != undefined ? req.body.theaterId :  booking.theaterId ;
        booking.moviesId = req.body.moviesId != undefined ? req.body.moviesId : booking.moviesId;
        booking.userId = req.body.userId != undefined ? req.body.userId : booking.userId;
        booking.status = req.body.status != undefined ? req.body.status : booking.status;

        await booking.save()
     try{
      if(booking){
        return res.status(200).send(booking)
      }


     }catch(error){
        return res.status(500).send({message : "Some internal error occured"})
     }
    
}



exports.deleteByMovie = async (req, res) => {
    const user = await User.findOne({userId: req.userId})
    
    const booking = await Booking.deleteOne({_id: req.params.id})

    if (booking === null) {
        return res.status(404).send({
          message: 'Booking not found',
        })}
       
     
    try{
        if(booking.userId != user._id){
            return res.status(400).send({message: "access denied"})
        }
        return res.status(200).send({message: "Delete successful by id"})
      }catch(error){
       
        return res.status(500).send({message: "Some internal error occured"})
   
    }


}

