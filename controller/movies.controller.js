const Movie = require("../model/movies.model") 

exports.createMovie = async(req, res) => {
    
   const movieObject = {
    name: req.body.name,
    description: req.body.description,
    director: req.body.director,
    releaseStatus: req.body.releaseStatus,
    casts: req.body.casts,
    posterUrl:  req.body.posterUrl,
    trailerUrl:  req.body.trailerUrl,
    langauge: req.body.langauge,
    realeseDate: req.body.realeseDate
   }
try{
    const movie = await Movie.create(movieObject)
     return res.status(200).send(movie)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}catch(error){
   return res.status(500).send({message: "Some error Occured by creating movie!", error})
}

}


exports.getAllMovie = async(req, res) => {

   const quearyObj = {}
   const movie = await Movie.find(quearyObj)
    
   try{
   if(movie){
      return res.status(200).send(movie)
    }
   }catch(error){
      return res.status(500).send({message: "MovieId is incorrect ", error})
   }

}

exports.getMovie = async(req, res) => {

   const id = req.params.id;
    const movie = await Movie.findById(id)
    try{
    if(movie){
      return res.status(200).send(movie)
    }
   }catch(error){
      return res.status(500).send({message: "MovieId is incorrect ", error})
   }

    
}

exports.updateMovie = async(req, res) => {
    
   var id = req.params.id;
   var isUpdate = null;
 
   try{
   isUpdate = await Movie.findOne({_id: id})
  

   if(!isUpdate){
      return res.status(400).send({
         message: "The move you went to update doesn't excit in our database"
      })
   }
   }catch(error){
      return res.status(500).send({message: "Somthin want wrong featching the movie  update" , error})
   }
   

      isUpdate.name = req.body.name != undefined ? req.body.name :  isUpdate.name;
      isUpdate.description = req.body.description != undefined ? req.body.description :  isUpdate.description;
      isUpdate.casts = req.body.casts != undefined ? req.body.casts :  isUpdate.casts;
      isUpdate.langauge = req.body.langauge != undefined ? req.body.langauge :  isUpdate.langauge;
      isUpdate.trailerUrl = req.body.trailerUrl != undefined ? req.body.trailerUrl :  isUpdate.trailerUrl;
      isUpdate.posterUrl = req.body.posterUrl != undefined ? req.body.posterUrl :  isUpdate.posterUrl;
      isUpdate.releaseStatus = req.body.releaseStatus != undefined ? req.body.releaseStatus :  isUpdate.releaseStatus;
      isUpdate.realeseDate = req.body.realeseDate != undefined ? req.body.realeseDate :  isUpdate.realeseDate;
      isUpdate.director = req.body.director != undefined ? req.body.director :  isUpdate.director;

       

     try{
      const update = await isUpdate.save();
       if(update){
         return res.status(200).send({message: "Update movie successufly"})    
       }
      }catch(error){
         return res.status(500).send({message: "Somthin want wrong featching the movie  update"})
      }

}



exports.deleteMovie = async(req, res) => {
  
   const id = req.params.id;
   const movie = await Movie.deleteOne({_id: id})
   try{
   if(movie){
     return res.status(200).send({message: "Delete movie succefuly"})
   }
  }catch(error){
     return res.status(500).send({message: "MovieId is incorrect ", error})
  }

    
}

