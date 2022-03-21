
// pemanggilan library
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

dotenv.config();

//pengecekan koneksi server backend
app.listen(8800, () => {
    console.log('Backend server berjalan di port 8800');
});