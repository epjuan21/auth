const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
        name: {
            type: String,
            required: true,
            min: 6,
            max: 255
        },
        email: {
            type: String,
            required: true,
            min: 6,
            max: 1024
        },
        password: {
            type: String,
            required: true,
            min: 6,
            max: 1024,
        }
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('User', userSchema);