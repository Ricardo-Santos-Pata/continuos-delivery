const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('test should fail.');
}
)
;

module.exports = app;
