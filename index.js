// index.js

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.get('/search', (req, res) => {
    res.send('Search page');
    }
);

app.listen(3000, () => {
    console.log('Test listening on port 3000!');
    }
);