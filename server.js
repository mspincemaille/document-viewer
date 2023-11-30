const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const LOCAL_PORT = 8000;

app.use(cors());

app.get('/config', (req, res) => {
        fs.readFile(__dirname + '/src/config/config.json', (err, data) => {
                if (err) {
                        res.status(400).send()
                } else {
                        res.send(data);
                }
        });
});

app.get('/data', (req, res) => {
        fs.readFile(__dirname + '/src/config/data.json', (err, data) => {
                if (err) {
                        res.status(400).send()
                } else {
                        res.send(data);
                }
        });
});

app.get('/document/:id', (req, res) => {
        const id = req.params.id;
        fs.readFile(__dirname + `/src/files/` + id + '.jpg', (err, data) => {
                console.log(data);
                if (err) {
                        res.status(400).send()
                } else {
                        res.send(data);
                }
        });


});

app.listen(LOCAL_PORT, () => {
        console.log('App listening on port ' + LOCAL_PORT);
})