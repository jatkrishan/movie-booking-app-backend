const {verifyMovieReqBody} = require("../middleware")
const movieController = require("../controller/movies.controller")

module.exports = function (app){
    app.get("/movieBooking/api/v1/movies", movieController.getAllMovie)
    app.get("/movieBooking/api/v1/movies/:id", movieController.getMovie)
     app.post("/movieBooking/api/v1/movies",[verifyMovieReqBody.validMovieRequestBody], movieController.createMovie)
     app.put("/movieBooking/api/v1/movies/:id",[verifyMovieReqBody.validMovieRequestBody], movieController.updateMovie)
     app.delete("/movieBooking/api/v1/movies/:id", movieController.deleteMovie)
}
