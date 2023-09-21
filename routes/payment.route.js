 const  {verifyUser} = require("../middleware/index");
 const paymentController= require(".././controller/payment.controller")

module.exports = function (app){
    app.get("/movvieBooking/api/v1/payment", [ verifyUser.verifyToken], paymentController.getPaymentAll)
    app.get("/movvieBooking/api/v1/payment/:id", [verifyUser.verifyToken], paymentController.getPaymentById)
    app.post("/movvieBooking/api/v1/payment", [verifyUser.verifyToken], paymentController.createPayment)
}