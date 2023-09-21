const configDb = require("./config/db.config")
const configServer = require("./config/server.config")

require("dotenv").config()

//Express Require
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const mongoose = require("mongoose")
mongoose.connect(configDb.DB_URL);
const db = mongoose.connection

db.on("error" ,() =>{
    console.log("Error while connection to DB ")
})

db.once("open" ,() =>{
    console.log("connected to mongoose DB ")
})
  
require("./routes/movie.route")(app);
require("./routes/theatre.route")(app);
require("./routes/auth.route")(app);
require("./routes/user.route")(app);
require("./routes/booking.route")(app);
require("./routes/payment.route")(app)

app.listen(configServer.PORT, ()=>{
    console.log("Application start on port ", configServer.PORT) 
})