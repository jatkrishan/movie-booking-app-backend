const userController = require("../controller/user.controller")
const verifyUser = require("../middleware/verifyUser")


module.exports = function(app){
    app.get("/movieBooking/api/v1/user/admin", [verifyUser.verifyToken, verifyUser.isAdmin], userController.getAllUser)
    app.get("/movieBooking/api/v1/user/:id", [verifyUser.verifyToken, verifyUser.isAdmin],  userController.getUserById)
    app.put("/movieBooking/api/v1/user/admin/:id", [verifyUser.verifyToken, verifyUser.isAdmin] , userController.updateUser)
    app.delete("/movieBooking/api/v1/user/admin/:id", [verifyUser.verifyToken, verifyUser.isAdmin],  userController.deleteUser)
}

