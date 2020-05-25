const config = require('./config');

const express = require('express'),
  router = require('./scripts/modules/router'),
  app = express();

app.set('view engine', 'ejs')
  .set('views', 'views')
  .use(express.static('static'))

  .get('/', async (req, res) => {
    router.basicPage(res, "home", "Home");
  })

  .get('/login', async (req, res) => {
    router.basicPage(res, "login", "Login");
  })

  .listen(config.port, () => {
    console.log(`Application started on port: ${config.port}`);
  });

// Spotify Oauth
const spotifyLogin = require('./server/login.js')
const spotifyCallback = require('./server/callback.js')

// Spotify login routes
app.get('/spotifylogin', spotifyLogin) // Redirect for Spotify auth
app.get('/callback', spotifyCallback) // Callback for fetching Spotify tokens

