const dotenv = require('dotenv')
const express = require("express");
const app = express();
const connectDB = require("./config/db");
//const AuthRoute = require('./routes/auth')
const cors = require('cors')
const errorHandler = require("./middleware/error");

dotenv.config()

connectDB();


app.use(express.json())
app.use(cors())



//app.get("/", (req, res, next) => {
  //res.send("Api running");
//});

// Connecting Routes
app.use('/api/auth', require('./routes/auth'));
app.use("/api/private", require("./routes/private"));

// Error Handler Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});