const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI (from Kubernetes Service DNS)
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://xx:xx@cluster0.o8emf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Hello from Node.js with MongoDB on Kubernetes!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});