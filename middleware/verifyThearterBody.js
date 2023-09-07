

validTheatreRequestBody = async (req, res, next)=>{
//check Name

if(!req.body.name){
   return res.status(400).send({message: "Error Name is required"})
}

//description check

if(!req.body.description){
    return  res.status(400).send({message: "Error description is required"})
}

if(!req.body.city){
    return   res.status(400).send({message: "Error city is required"})
}

if(!req.body.pinCode){
    return  res.status(400).send({message: "Error pincode is required"})
}

next()

}



const verifyTheatreReqBody = {
    validTheatreRequestBody: validTheatreRequestBody
}

module.exports = verifyTheatreReqBody;