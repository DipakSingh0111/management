// package
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");

// import files
const connectDb = require("./config/db");
const userRoute = require("./routes/userRoute");
const transectionRoute = require("./routes/transectionRoutes");

// rest  object
const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
// users routes
app.use("/api/v1", userRoute);
// transection routes
app.use("/api/v1", transectionRoute);

// stack file
app.use(express.static(path.join(__dirname, "./client/build")));
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// env config
dotenv.config();

// database connection
connectDb();

// PORT
const PORT = process.env.PORT || 4000;
// listen
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
