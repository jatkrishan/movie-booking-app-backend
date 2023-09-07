const {verifyTheatreReqBody} = require("../middleware/index")
const theatreController = require("../controller/theatre.controller")


module.exports = function(app){
    
    app.get("/movieBooking/api/v1/theater", theatreController.getAllTheatre)
    app.get("/movieBooking/api/v1/theater/:id", theatreController.getTheatreById)
    app.post("/movieBooking/api/v1/theater", [verifyTheatreReqBody.validTheatreRequestBody], theatreController.createTheatre)
    app.put("/movieBooking/api/v1/theater/:id", theatreController.updateTheatreById)
    app.delete("/movieBooking/api/v1/theater/:id", theatreController.deleteTheatreById)

    
    app.put("/movieBooking/api/v1/theatre/:id/movie", theatreController.addMoviesToATheatre)
    app.get("/movieBooking/api/v1/theatre/:theatreId/movie/:movieId", theatreController.checkMovieToTheatre)

}