
const Theatre = require("../model/thearter.model.js")
const Movie = require("../model/movies.model")
//Operatcion on create, updae, delete, get

exports.createTheatre = async(req, res) => {
    
    const theatreObj = {
        name: req.body.name,
        description: req.body.description,
        city: req.body.city,
        pinCode: req.body.pinCode,
    }

    try{
        const theatre = await Theatre.create(theatreObj) 

        if(theatre){
            return res.status(200).send(theatre)
        }
    }catch(error){
        return res.status(400).send({message: "Some error occured by the theatre"})
    }

}


exports.getAllTheatre = async(req, res) => {

    const quearyObject = {}

    if(req.query.name != undefined){
        quearyObject.name = req.query.name
    }
    
    if(req.query.city != undefined){
        quearyObject.city = req.query.city
    }
    
    if(req.query.pincode != undefined){
        quearyObject.pincode = req.query.pincode
    }

    try{
        const theatres = await Theatre.find(quearyObject)
         
          if(req.query.moviedId != undefined){
            theatres = theatres.filter(t => t.movies.includes(req.query.moviedId))
          } 

          return res.status(200).send(theatres)


    }catch(error){
        return res.status(400).send({message: "Some error occured by the theatre" , error})
    }
}


exports.getTheatreById = async(req, res) => {
    
   const theatreById = await Theatre.findOne({_id: req.params.id})

   try{
       
    return res.status(200).send(theatreById)
   
    }catch(error){
   
        return res.status(400).send({message: "Some error occured by the theatre"})
   }

}

exports.updateTheatreById = async(req, res) => {
      
    const thertreUpdate = await Theatre.findOne({_id: req.params.id})
    if(!thertreUpdate){
        return res.status(400).send({message: "Enter a valid id"})
    }
     
    thertreUpdate.name = req.body.name != undefined ? req.body.name : thertreUpdate.name;
    thertreUpdate.city = req.body.city != undefined ? req.body.city : thertreUpdate.city;
    thertreUpdate.pinCode = req.body.pinCode != undefined ? req.body.pinCode : thertreUpdate.pinCode;
      
     const thertreUpdateById = await thertreUpdate.save()

    try{
             return res.status(200).send(thertreUpdateById)

    }catch(error){
        return res.status(500).send({message: "Some error occured by the theatre "})
    }
    
}

exports.deleteTheatreById = async(req, res) => {
    
    const theatreById = await Theatre.deleteOne({_id: req.params.id})

    try{
        
     return res.status(200).send({message: `Successfuly deleted id-${req.params.id}`})
       
    
     }catch(error){
    
         return res.status(400).send({message: "Some error occured by the theatre "})
    }
}

exports.addMoviesToATheatre = async (req, res) => {
    var movieIds = []
    var validMovieIds = []
    try{
        //Check if the theatre exists
        const savedTheatre = await Theatre.findOne({ _id: req.params.id})

        if(!savedTheatre){
            return res.status(400).send({
                message: "The theatre where you want to add the movies doesn't exist!"
            })
        }

        //Add only those movies which are in the system
        validMovieIds = await getValidMovies(req.body.movieIds)
     
        if(validMovieIds.length > 0){
            savedTheatre.movies = validMovieIds
            const updatedTheatre = await savedTheatre.save()
            return res.status(200).send(updatedTheatre)
        }else{
            return res.status(400).send({
                message: "No valid movie to be added to the theatre"
            })
        }

    }catch(err){
        return res.status(500).send({
            message: "Some error occured while adding movied to the theatre " +  err
        })
    }

}

getValidMovies = async (movieIds) => {
    var validMovieIds = []


    if(movieIds != null && movieIds.length > 0){

        for(let i = 0; i < movieIds.length; i++){
            const savedMovie = await Movie.findOne({_id: movieIds[i]})
            if(savedMovie){
                validMovieIds.push(movieIds[i])
            }
        }
    }

    return validMovieIds
}



exports.checkMovieToTheatre = async(req, res) => {
    
    const savedTheatre = await Theatre.findOne({_id: req.params.theatreId})
     
    if(!savedTheatre){
        return res.status(400).send({message: "Theatre where you want to check the movie for doesnt excit!"})
    }

    const savedMovie = await Movie.findOne({_id: req.params.movieId})
    console.log(savedMovie)
    if(!savedMovie ){
        return res.status(400).send({message: "The movie looking for doesn't excit"})
    }
    return res.status(200).send({
        message: savedTheatre.movies.includes(req.params.movieId) ? "The movie is present" : "movie doesn't excit"
    })
}