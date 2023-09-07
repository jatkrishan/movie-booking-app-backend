const verifyUser = require("../middleware/verifyUser")
const bookinController = require("../controller/booking.controller")
const verifyBooking = require("../middleware/verifyBookingMovieBody")

module.exports = function(app){
    app.get("/BookingId/api/v1/boocked", [verifyUser.verifyToken, verifyUser.isAdmin], bookinController.getAllMovieByAdmin)
    app.get("/BookingId/api/v1/boocked", [verifyUser.verifyToken, verifyUser.isCustomer], bookinController.getAllMovieByUser)
    app.get("/BookingId/api/v1/boocked/:id", [verifyUser.verifyToken, verifyUser.isAdminAndCustomer], bookinController.getbyIdMovie)
    app.post("/BookingId/api/v1/boocked/",  [verifyUser.verifyToken, verifyUser.isCustomer, verifyBooking.validateBookingRequestBody], bookinController.createMovie)
    app.put("/BookingId/api/v1/boocked/:id",  [verifyUser.verifyToken, verifyUser.isAdminAndCustomer], bookinController.UpdateByMovie)
    app.delete("/BookingId/api/v1/boocked/:id",  [verifyUser.verifyToken, verifyUser.isAdminAndCustomer], bookinController.deleteByMovie)
}