const config = require('./config');

const express = require('express'),
    // socket = require('./server/spotify_playback'),
    router = require('./scripts/modules/router'),
    app = express(),

    // multer = require('multer'),
    // upload = multer({dest: 'uploads/'}),
    caregivers = {
        id: 'test'
    };

const bodyParser = require('body-parser');
// const session = require('express-session');
const cookies = require('cookie-parser');

// Port
app.listen(config.port, () => {
    console.log(`Application started on port: ${config.port}`);
});

// Body parser init
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

// Session init
// app.use(
//     session({
//         resave: false,
//         saveUninitialized: true,
//         secret: process.env.SESSION_KEY,
//         port: process.env.PORT,
//         secure: false,
//     })
// );

// Cookie parser init
app.use(cookies());

app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    // Check if ACCESS_TOKEN exists. If not, fetch a new one with the refresh token.
    .get('/', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.basicPage(res, 'music-overview', 'Herinneringen');
        } else {
            getRefreshToken(req, res).then(() => {
                router.basicPage(res, 'music-overview', 'Herinneringen');
            });
        }
    })

    .get('/memories-overview', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.basicPage(res, 'music-overview', 'Herinneringen');
        } else {
            getRefreshToken(req, res).then(() => {
                router.basicPage(res, 'music-overview', 'Herinneringen');
            });
        }
    })

    .get('/login', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.basicPage(res, 'login', 'Login');
        } else {
            getRefreshToken(req, res).then(() => {
                router.basicPage(res, 'login', 'Login');
            });
        }
    })

    .get('/add-memory', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.pageWithData(res, 'add-memory', 'Herinneringen', caregivers);
        } else {
            getRefreshToken(req, res).then(() => {
                router.pageWithData(res, 'add-memory', 'Herinneringen', caregivers);
            });
        }
    })

    .get('/memory-details', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.pageWithData(res, 'memory-details', 'Herinnering details', caregivers);
        } else {
            getRefreshToken(req, res).then(() => {
                router.pageWithData(res, 'memory-details', 'Herinnering details', caregivers);
            });
        }
    })

    .get('/music-overview', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.pageWithData(res, 'music-overview', 'Muziek');
        } else {
            getRefreshToken(req, res).then(() => {
                router.pageWithData(res, 'music-overview', 'Muziek');
            });
        }
    })

    .get('/settings', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.basicPage(res, 'settings', 'Instellingen');
        } else {
            getRefreshToken(req, res).then(() => {
                router.basicPage(res, 'settings', 'Instellingen');
            });
        }
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