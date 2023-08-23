// const Movies = require("../model/movies.model")
const constant = require("../unites/constant")


validMovieRequestBody = async (req, res, next)=>{
//check Name

if(!req.body.name){
    res.status(400).send({message: "Error Name is required"})
}

//description check

if(!req.body.description){
    res.status(400).send({message: "Error description is required"})
}

if(!req.body.director){
    res.status(400).send({message: "Error director is required"})
}

if(!req.body.langauge){
    res.status(400).send({message: "Error langauge is required"})
}

 const releaseStatus = [constant.movieStatusType.blocked, constant.movieStatusType.releaseStatus, constant.movieStatusType.unrelesed]

 const movieStatus = req.body.releaseStatus;

if(!movieStatus && !releaseStatus.includes(movieStatus)){
    res.status(400).send({message: "Error releaseStatus is required"})
}


next()

}



const verifyMovieReqBody = {
    validMovieRequestBody: validMovieRequestBody
}

module.exports = verifyMovieReqBody;