require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth-router')
const app = express();
const songRoutes = require('./routes/songRoutes');
const path = require('path');

app.use(express.json());

const corsOptions = {
  origin: 'https://music-platform-v787.vercel.app', // The exact origin of your frontend
  credentials: true, // Allow cookies to be sent
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
};

app.use(cors(corsOptions));

mongoose.connect(process.env.MONGO_URI_USERS)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB error:', err));
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('MongoDB connection open'));


app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api/auth', authRoutes);
app.use('/api/songs', songRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
