const express = require('express');
const connectDB = require('./db/database');
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
const url = process.env.DB_STRING;
connectDB(url)

// Middlewares
app.use(cors(options));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
const authRoutes = require('./routes/auth');
const adminRoute = require('./routes/rutaProtegida');
app.use('/api/v1/user', authRoutes);
app.use('/api/v1/admin', adminRoute);

// Server
app.listen(port, () => {
    console.log(`Server on port ${port}`)
})