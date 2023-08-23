const Movie = require("../model/movies.model") 

exports.createMovie = async(req, res) => {
    
    const movie = await Movie.create()

}


exports.getAllMovie = async(req, res) => {


}

exports.getMovie = async(req, res) => {
    
}

exports.updateMovie = async(req, res) => {
    
}

exports.deleteMovie = async(req, res) => {
    
}

