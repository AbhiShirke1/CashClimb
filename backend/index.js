const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const roomRoute = require('./routes/roomRoute');
const authRoute = require('./routes/authRoute');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.use('/api/user', authRoute);
app.use('/api/room', roomRoute);

    
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});