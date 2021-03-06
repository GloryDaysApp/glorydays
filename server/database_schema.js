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
    memoryId: String,
    song: {
        type: Array,
        default: []
    },
    emotion: String,
    energy: String, 
    description: {
        type: Array,
        default: []
    },
    title: {
        type: Array,
        default: []
    },
    keywords: {
        type: Array,
        default: []
    },
    image: String
});

// // Model
const Account = mongoose.model('Account', account);
const Memory = mongoose.model('Memory', memory);

module.exports = { Account, Memory };