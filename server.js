const config = require('./config');
const socket = require('socket.io');

const express = require('express'),
    // socket = require('./server/spotify_playback'),
    router = require('./scripts/modules/router'),
    app = express(),
    multer = require('multer'),
    upload = multer({ dest: 'uploads/' }),
    caregivers = { id: 'test' };

// const http = require('http');
// const server = http.createServer(app);

// const ioInstance = require('socket.io')(server);

// // main.js
// const io = require('./server/spotify_playback.js');
// io.listen(ioInstance);
// // console.log(io);

const bodyParser = require('body-parser');
const session = require('express-session');
const cookies = require('cookie-parser');

// socket.init();
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

    .get('/addMemory.ejs', async (req, res) => {
        router.pageWithData(res, 'addMemory', 'Herinnering toevoegen', caregivers);
    })

    // Spotify login url
    .get('/login', async (req, res) => {
        router.basicPage(res, 'login', 'Login');
    })

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });

const server = app.listen(config.port, () => {
    console.log(`Application started on port: ${config.port}`);
});

const ioInstance = socket(server);

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

ioInstance.on('connection', function () {
    console.log('Halllooooooo coen');

    // // Get song
    // socket.on('getSong', function (id) {
    //     socket.emit('getTokens', id);
    //     socket.broadcast.emit('getTokens', id);
    // });

    // // Play song
    // socket.on('playSong', function (myObject) {
    //     // Fetch for streaming spotify to play a track
    //     fetch('https://api.spotify.com/v1/me/player/play', {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             Authorization: `Bearer ${myObject.accessToken}`,
    //         },
    //         body: JSON.stringify({
    //             uris: [`spotify:track:${myObject.id}`],
    //             title: [`spotify:track:${myObject.name}`],
    //         }),
    //     }).then(async (response) => {
    //         tracksData = await response.json();
    //         if (response.status == 403) {
    //             socket.emit(
    //                 'server message',
    //                 'Server: You dont have a spotify premium account.You can chat with people but you cant listen to the party music.'
    //             );
    //         }
    //         if (response.status == 404) {
    //             socket.emit(
    //                 'server message',
    //                 'Server: We cant find an active device please open your spotify application on your own device and start a random track to active the session.'
    //             );
    //         }
    //     });
    // });

});
