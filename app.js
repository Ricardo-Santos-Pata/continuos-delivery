const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const msg = 'needs to fail';
    console.log(msg);
    res.send('Works on my machine.');
});

module.exports = app;
