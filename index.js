// index.js 
const express = require('express');
const axios = require('axios'); // axios for api calls
const app = express();

app.set('view engine', 'ejs'); // set view engine to ejs
app.set('views', './views'); // set views directory

// serve built react app from node server
app.use(express.static('forkly-frontend/build'));

app.get('/', (req, res) => {
    res.render('views/index.ejs');
});

const quer = document.getElementById('search');
// recover the query string from the request
// use the query string to make a request to the api
// render the results from the api in the index.ejs view template
app.get('/search', (req, res) => {
    const query = req.query.q;
    const key = '02dc9c177b404c14ab292cdf12bf3418'
    const url = `https://api.spoonacular.com/recipes/search?apiKey=${key}&query=${query}&number=10`;
    axios.get(url)
        .then(response => {
            const results = response.data.results;
            res.render('index', { results });
        })
        .catch(err => {
            console.log(err);
            res.render('index', { results: [] });
        });
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
    }
);