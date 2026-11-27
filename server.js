// Import and configure our environment variables
import 'dotenv/config';

// Import Express
import express from 'express';

// Import our database connection
import connectDB from './config/connection.js';

// Initialize our Express app
const app = express();

// Configure our server port
const port = process.env.PORT || 3014;

// Middleware to access JSON request bodies
app.use(express.json());

// Test our Express server
app.get("/", (req, res) => {
    res.json({
        message: "Welcome to the Zenith Product API!"
    });
});

// Connect to MongoDB before starting the server
connectDB().then(() => {
    app.listen(port, () => {
        console.log('Server running on port: http://localhost:' + port);
    });
});