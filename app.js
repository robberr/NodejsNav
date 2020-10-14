const express = require('express');
const pug = require('pug');
const app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
    res.render('nav.pug', { pageTitle: 'cool engine' });
});


module.exports = app;
