const mongoose = require('mongoose');

async function connectDB(url) {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => console.info('Connected to MongoDB Atlas'))
        .catch(err => console.error(err))
}

module.exports = connectDB;