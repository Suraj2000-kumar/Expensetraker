const mongoose = require('mongoose');

//schema
const userSchema = mongoose.Schema({
    firstname: {
        required: [true, 'First name is required'],
        type: String,
    },
    lastname: {
        required: [true, 'Last name is required'],
        type: String,
    },
    email: {
        required: [true, 'Email is required'],
        type: String,
    },
    password: {
        required: [true, 'Password is required'],
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{
    timestamp: true,
});

//compiling the schema into a model
const User = mongoose.model('User', userSchema);

model.exports = User;