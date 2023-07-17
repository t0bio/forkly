// index.js

const express = require('express');
const axios = require('axios'); // axios for api calls
const app = express();

app.set('view engine', 'ejs'); // set view engine to ejs
app.set('views', path.join(__dirname, 'views')); // set views directory

// serve built react app from node server
app.use(express.static(path.join(__dirname, 'forkly-frontend/build')));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const key = '02dc9c177b404c14ab292cdf12bf3418'
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&query=${query}&number=10`;
    const response = await axios.get(url);
    const recipes = response.data.results;
    res.render('search', { recipes });

});

app.listen(3000, () => {
    console.log('Test listening on port 3000');
    }
);