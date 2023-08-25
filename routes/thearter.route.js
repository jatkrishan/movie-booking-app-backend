const verifyThearterReqBody = require("../middleware")
const {verifyMovieReqBody} = require("../middleware")


module.exports = function(app){

    app.get("/thearterShow/api/v1/therter")
    app.get("/thearterShow/api/v1/therter/:id")
    app.post("/thearterShow/api/v1/therter", [verifyThearterReqBody.verifyThearterReqBody], )
    app.put("/thearterShow/api/v1/therter/:id", [verifyThearterReqBody.verifyThearterReqBody], )
    app.delele("/thearterShow/api/v1/therter/:id")

    
    app.put("/addMovieToTherter/api/v1/therter/:id", [verifyThearterReqBody.verifyMovieReqBody], )
    app.get("/AllMovieToTherter/api/v1/therter")
    app.get("/oneMovieToTherter/api/v1/therter/:id")




}