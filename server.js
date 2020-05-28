const config = require('./config');

const express = require('express'),
    router = require('./scripts/modules/router'),
    app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const cookies = require('cookie-parser');

// Body parser init
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Session init
app.use(
    session({
        secret: process.env.SESSION_KEY,
        resave: false,
        saveUninitialized: true,
    })
);

// Cookie parser init
app.use(cookies());


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

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });

// Spotify Oauth
const spotifyLogin = require('./server/login.js');
const spotifyCallback = require('./server/callback.js');
const getRefreshToken = require('./server/get_refresh_token.js');

// Spotify login routes
app.get('/spotifylogin', spotifyLogin); // Redirect for Spotify auth
app.get('/callback', spotifyCallback); // Callback for fetching Spotify tokens

app.get('/refresh', getRefreshToken); // Callback for fetching Spotify tokens

// Spotify song search
const getSpotifySongs = require('./server/get_spotify_songs.js');
app.post('/search', getSpotifySongs);