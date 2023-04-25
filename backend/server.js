const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const cors = require('cors');


dotenv.config();
connectDB();
const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

app.use("/api/user", userRoutes);

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
