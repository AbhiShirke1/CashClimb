const express = require('express');
require('dotenv').config();
const  connectDB  = require('./config/db');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});