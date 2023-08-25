


validThearterRequestBody = async (req, res, next)=>{
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

if(!req.body.pincode){
    return  res.status(400).send({message: "Error pincode is required"})
}

//  const releaseStatus = [constant.releaseStatus.blocked, constant.releaseStatus.releaseStatus, constant.releaseStatus.unrelesed]

//  const movieStatus = req.body.releaseStatus;

// if(!releaseStatus.includes(movieStatus)){
//     return   res.status(400).send({message: "Error releaseStatus is required"})
// }


next()

}



const verifyThearterReqBody = {
    validThearterRequestBody: validThearterRequestBody
}

module.exports = verifyThearterReqBody;