// const Movies = require("../model/movies.model")
const constant = require("../unites/constant")


validMovieRequestBody = async (req, res, next)=>{
//check Name

if(!req.body.name){
   return res.status(400).send({message: "Error Name is required"})
}

//description check

if(!req.body.description){
    return  res.status(400).send({message: "Error description is required"})
}

if(!req.body.director){
    return   res.status(400).send({message: "Error director is required"})
}

if(!req.body.langauge){
    return  res.status(400).send({message: "Error langauge is required"})
}

if(!req.body.casts){
    return  res.status(400).send({message: "Error casts is required"})
}


 const releaseStatus = [constant.releaseStatus.blocked, constant.releaseStatus.realsed, constant.releaseStatus.unrelesed]

 const movieStatus = req.body.releaseStatus;

if(!releaseStatus.includes(movieStatus)){
    return   res.status(400).send({message: "Error releaseStatus is required"})
}


next()

}



const verifyMovieReqBody = {
    validMovieRequestBody: validMovieRequestBody
}

module.exports = verifyMovieReqBody;