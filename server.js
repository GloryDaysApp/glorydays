const config = require("./config");

<<<<<<< HEAD
const express = require('express'),
    router = require('./scripts/modules/router'),
    app = express();

const bodyParser = require('body-parser');
const session = require('express-session');
const cookies = require('cookie-parser');
=======
const express = require("express"),
  router = require("./scripts/modules/router"),
  app = express();

const bodyParser = require("body-parser");
const session = require("express-session");
const cookies = require("cookie-parser");
>>>>>>> a5228719c3dc7fd4789ad6a1d1ec2283b6fff432

// Body parser init
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Session init
<<<<<<< HEAD
app.use(session({ secret: process.env.SESSION_KEY, resave: false, saveUninitialized: true }));
=======
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
  })
);
>>>>>>> a5228719c3dc7fd4789ad6a1d1ec2283b6fff432

// Cookie parser init
app.use(cookies());

<<<<<<< HEAD
app.use(session({
=======
app.use(
  session({
>>>>>>> a5228719c3dc7fd4789ad6a1d1ec2283b6fff432
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_KEY,
    port: process.env.PORT,
<<<<<<< HEAD
    secure: false
}));

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', async (req, res) => {
        router.basicPage(res, 'home', 'Home');
    });

// Spotify login url
app
    .get('/login', async (req, res) => {
        router.basicPage(res, 'login', 'Login');
    })
=======
    secure: false,
  })
);

app
  .set("view engine", "ejs")
  .set("views", "views")
  .use(express.static("static"))

  .get("/", async (req, res) => {
    router.basicPage(res, "home", "Home");
  })

  // Spotify login url
  .get("/login", async (req, res) => {
    router.basicPage(res, "login", "Login");
  })
>>>>>>> a5228719c3dc7fd4789ad6a1d1ec2283b6fff432

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });

// Spotify Oauth
<<<<<<< HEAD
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
=======
const spotifyLogin = require("./server/login.js");
const spotifyCallback = require("./server/callback.js");
const getRefreshToken = require("./server/get_refresh_token.js");

// Spotify login routes
app.get("/spotifylogin", spotifyLogin); // Redirect for Spotify auth
app.get("/callback", spotifyCallback); // Callback for fetching Spotify tokens

app.get("/refresh", getRefreshToken); // Callback for fetching Spotify tokens

// Spotify song search
const getSpotifySongs = require("./server/get_spotify_songs.js");
app.post("/search", getSpotifySongs);
>>>>>>> a5228719c3dc7fd4789ad6a1d1ec2283b6fff432
