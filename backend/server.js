const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");


const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json()); 

// Route Middleware
app.use("/api/users", userRoute);

// Routes
app.get("/", (req, res) =>{
  res.send("Home Page");
});

const PORT = process.env.PORT || 3993;

// Error Middleware
app.use(errorHandler);

// connect to DB and start server
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () =>{
          console.log(`Server running on port ${PORT}`)  
        })
    })
    .catch((error) => console.log(error))