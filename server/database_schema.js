const mongoose = require('mongoose');

// Mongoose schema
const Schema = mongoose.Schema;

const account = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    country: String,
    photo: String,
    genres: {
        type: Array,
        default: []
    },
    ages: {
        type: Array,
        default: []
    },
    artists: {
        type: Array,
        default: []
    },
    spotifyRefreshToken: String,
    spotifyAccessToken: String,
    careTakers: {
        type: Array,
        default: []
    }
});

const memory = new Schema({
    song: {
        type: Array,
        default: []
    },
    emotion: String,
    intensity: String, 
    catchWords: {
        type: Array,
        default: []
    },
    media: {
        type: Array,
        default: []
    }
});

// // Model
const Account = mongoose.model('Room', account);
const Memory = mongoose.model('User', memory);

module.exports = { Account, Memory };