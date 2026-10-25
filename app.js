const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let msg = 'needs to fail';
    res.send('Works on my machine.');
});

module.exports = app;
