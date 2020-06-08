const fetch = require('node-fetch');
const getRefreshToken = require('./get_refresh_token.js');
const cleanData = require('./clean_spotify_data.js');

module.exports = (req, res) => {
    if (req.cookies.ACCESS_TOKEN) {
        search(req.body.song, req.cookies.ACCESS_TOKEN).then(data => {
            const cleanedData = cleanData(data);
            console.log(cleanedData);
            res.send(data);
        });
    } else {
        getRefreshToken(req, res).then(ACCESS_TOKEN => {
            // Run search with query
            search(req.body.song, ACCESS_TOKEN).then(data => {
                const cleanedData = cleanData(data);
                console.log(cleanedData);
                res.send(data);
            });
        });
    }
    console.log(req.cookies.ACCESS_TOKEN);
};

