const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const roomRoute = require('./routes/roomRoute');
const authRoute = require('./routes/authRoute');
const socketIo = require('socket.io');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoute = require('./routes/postRoute');
const userRoute = require('./routes/userRoute');
const fileUpload = require('express-fileupload');
const chatRoute = require('./routes/chatRoute');
const messageRoute = require('./routes/messageRoute');
const dealRoute = require('./routes/dealRoute');

const app = express();
const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', (socket) => {
  console.log('client connected: ', socket.id)

  socket.join('clock-room')

  socket.on('disconnect', (reason) => {
    console.log(reason)
  })
});

setInterval(() => {
  io.to('clock-room').emit('time', new Date())
}, 1000)

app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

connectDB();

app.use('/api/user', authRoute);
app.use('/api/room', roomRoute);
app.use('/api/post', postRoute);
app.use('/api/user', userRoute);
app.use('/api/chat', chatRoute);
app.use('/api/message', messageRoute);
app.use('/api/deal', dealRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.yellow.bold);
});

