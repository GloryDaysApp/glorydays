const config = require('./config');
const socket = require('socket.io');

const express = require('express'),
    // socket = require('./server/spotify_playback'),
    router = require('./scripts/modules/router'),
    app = express(),

    // multer = require('multer'),
    // upload = multer({dest: 'uploads/'}),
    caregivers = { id: 'test' };

const bodyParser = require('body-parser');
const session = require('express-session');
const cookies = require('cookie-parser');

// Port
app.listen(config.port, () => {
    console.log(`Application started on port: ${config.port}`);
});

// Body parser init
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Session init
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_KEY,
        port: process.env.PORT,
        secure: false,
    })
);

// Cookie parser init
app.use(cookies());

app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', async (req, res) => {
        router.basicPage(res, 'home', 'Home');
    })

    // Spotify login url
    .get('/login', async (req, res) => {
        router.basicPage(res, 'login', 'Login');
    })

    .get('/add-memory', async (req, res) => {
        router.pageWithData(res, 'add-memory', 'Herinnering toevoegen', caregivers);
    });

// Spotify Oauth
const spotifyLogin = require('./server/login.js');
const spotifyCallback = require('./server/callback.js');

// Spotify login routes
app.get('/spotifylogin', spotifyLogin); // Redirect for Spotify auth
app.get('/callback', spotifyCallback); // Callback for fetching Spotify tokens

// Get refresh token
const getRefreshToken = require('./server/get_refresh_token.js');
app.get('/refresh', getRefreshToken); // Callback for fetching Spotify tokens

// Spotify song search
// const getSpotifySongs = require('./server/get_spotify_songs.js');
// app.post('/search', getSpotifySongs);

// Spotify song search
const getSpotifySongs = require('./server/get_spotify_songs.js');
app.post('/search', getSpotifySongs);
