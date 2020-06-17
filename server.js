const config = require('./config');
const mongoose = require('mongoose');

const express = require('express'),
    router = require('./scripts/modules/router'),
    revManifest = require('./static/rev-manifest'),
    app = express(),
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
    extended: true
}));
// parse application/json
app.use(bodyParser.json());

// Cookie parser init
app.use(cookies());

// Mongoose setup
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rtw_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log(err));

mongoose.connection.on('connected', () => {
    console.log('mongoose is connected');
});

app
    .set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    // Check if ACCESS_TOKEN exists. If not, fetch a new one with the refresh token.
    .get('/', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.basicPage(res, 'memories-overview', 'Herinneringen', revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.basicPage(res, 'memories-overview', 'Herinneringen', revManifest);
                });
            }
        }
    })

    .get('/memories-overview', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.basicPage(res, 'memories-overview', 'Herinneringen', revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.basicPage(res, 'memories-overview', 'Herinneringen', revManifest);
                });
            }
        }
    })

    .get('/login', async (req, res) => {
        if (req.cookies.ACCESS_TOKEN) {
            router.basicPage(res, 'login', 'Login', revManifest);
        } else {
            getRefreshToken(req, res).then(() => {
                router.basicPage(res, 'login', 'Login', revManifest);
            });
        }
    })

    .get('/add-memory', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.pageWithData(res, 'add-memory', 'Herinneringen', caregivers, revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.pageWithData(res, 'add-memory', 'Herinneringen', caregivers, revManifest);
                });
            }
        }
    })

    .get('/memory-details', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.pageWithData(res, 'memory-details', 'Herinnering details', caregivers, revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.pageWithData(res, 'memory-details', 'Herinnering details', caregivers, revManifest);
                });
            }
        }
    })

    .get('/music-overview', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.pageWithData(res, 'music-overview', 'Muziek', revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.pageWithData(res, 'music-overview', 'Muziek', revManifest);
                });
            }
        }
    })

    .get('/settings', async (req, res) => {
        if (!req.cookies.REFRESH_TOKEN) {
            res.redirect('/login');
        } else {
            if (req.cookies.ACCESS_TOKEN) {
                router.basicPage(res, 'settings', 'Instellingen', revManifest);
            } else {
                getRefreshToken(req, res).then(() => {
                    router.basicPage(res, 'settings', 'Instellingen', revManifest);
                });
            }
        }
    })

    .get('/offline', (req, res) => {
        router.basicPage(res, 'offline', 'Oeps! Er is iets misgegaan', revManifest);
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

// Save data to database
// const submitMemory = require('./server/submit_memory.js');
// app.post('/submit-memory', submitMemory);

const { Account, Memory } = require('./server/database_schema.js');
const multer = require('multer');

// Multer setup
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './static/');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/submit-memory', upload.single('image-upload'), (req, res) => {
    // console.log(req.file, req.body);

    // Create new memory
    let memory = {
        title: req.body.title.length > 0 ? req.body.title.filter(text => text !== '') : null,
        description: req.body.description.length > 0 ? req.body.description.filter(desc => desc !== '') : null,
        keywords: req.body.keywords.length > 0 ? req.body.keywords.filter(keyword => keyword !== '') : null,
        media: []
    };

    // Store media
    if (req.file) {
        const image = {
            name: req.file.filename,
            path: `/${req.file.filename}`
        };

        console.log(image);

        memory.media.push(image);
    }

    // Save new user to database
    const newMemory = new Memory(memory);

    newMemory.save(err => {
        if (err) {
            console.log('save failed: ', err);
        } else {
            console.log('memory has been saved');
        }
    });
});