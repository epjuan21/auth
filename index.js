const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();

// Settings
const port = process.env.PORT || 3001;

// Cors
const whitelist = ['http://localhost:3001']
const options = {
    origin: (origin, callback) => {
        if ( whitelist.includes(origin) || !origin ) {
            callback(null, true)
        } else {
            callback(new Error('No Permitido'))
        }
    }
}

// Database

// Middlewares
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes


// Server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})