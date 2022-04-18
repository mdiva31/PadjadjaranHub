
// pemanggilan library
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// pemanggilan path untuk route
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

// memasang koneksi ke mongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database MongoDB Terkoneksi"))
  .catch(err => console.log(err));

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// routing
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

// pengecekan koneksi server backend
app.listen(8800, () => {
    console.log('Backend server berjalan di port 8800');
});