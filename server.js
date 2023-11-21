const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const LOCAL_PORT = 8000;

app.use(cors());

app.get('/config', (req, res) => {
    const file = fs.readFileSync (__dirname + '/src/config/config.json');
    res.send(file);
});

app.get('/data', (req, res) => {
    const file = fs.readFileSync (__dirname + '/src/config/data.json');
    res.send(file);
});

app.listen(LOCAL_PORT, () => {
    console.log('App listening on port ' +  LOCAL_PORT);
})