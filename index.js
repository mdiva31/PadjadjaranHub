
// pemanggilan library
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

// memasang koneksi ke mongoDB
mongoose.connect(process.env.MONGO_URL, { useNewParser: true, useUnifiedTopology: true }, () => {
    console.log('Terkoneksi ke MongoDB')
});

// pengecekan koneksi server backend
app.listen(8800, () => {
    console.log('Backend server berjalan di port 8800');
});