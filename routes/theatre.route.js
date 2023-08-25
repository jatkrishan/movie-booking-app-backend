const verifyTheatreReqBody = require("../middleware")
const {verifyMovieReqBody} = require("../middleware")


module.exports = function(app){

    app.get("/theatreShow/api/v1/theater")
    app.get("/theatreShow/api/v1/theater/:id")
    app.post("/theatreShow/api/v1/theater", [verifyTheatreReqBody.verifyTheatreReqBody], )
    app.put("/theatreShow/api/v1/theater/:id", [verifyTheatreReqBody.verifyTheatreReqBody], )
    app.delele("/theatreShow/api/v1/theater/:id")

    
    app.put("/addMovieToTherter/api/v1/therter/:id", [verifyTheatreReqBody.verifyMovieReqBody], )
    app.get("/AllMovieToTherter/api/v1/therter")
    app.get("/oneMovieToTherter/api/v1/therter/:id")




}