const config = require('./config');

const express = require('express'),
    router = require('./scripts/modules/router'),
    app = express();

app.set('view engine', 'ejs')
    .set('views', 'views')
    .use(express.static('static'))

    .get('/', async (req, res) => {
        router.basicPage(res, 'home', 'Home');
    })

    .listen(config.port, () => {
        console.log(`Application started on port: ${config.port}`);
    });