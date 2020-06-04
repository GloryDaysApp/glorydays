const config = require('./config');

const express = require('express'),
    router = require('./scripts/modules/router'),
    app = express(),
    // multer = require('multer'),
    // upload = multer({dest: 'uploads/'}),
    caregivers = {id: 'test'};

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', async (req, res) => {
        router.basicPage(res, 'home', 'Home');
    })

    .get('/add-memory', async (req, res) => {
        router.pageWithData(res, 'add-memory', 'Herinnering toevoegen', caregivers);
    })

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });