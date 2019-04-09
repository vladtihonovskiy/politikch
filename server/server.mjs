import config from "../config/config";
import fetch from 'node-fetch';
import customRoutes from "./routers/customRoutes";

import bodyParser from 'body-parser';

import cors from 'cors';

import express  from 'express';

// const DatabaseObject = new Database();
const app = express();

const originUrl = '*'; // 'https://warm-stream-11016.herokuapp.com';
const port = process.env.PORT || config.port;

app.use(cors({ origin: originUrl }));

app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());



app.get('/', (req, res) => {

    fetch('http://ws-old.parlament.ch/councillors', {
        method: 'GET',
        headers: {
            'Accept': 'text/json',
            'Content-Type': 'application/json'
        },
        body:null
    })
        .then(data => data.json()) // expecting a json response
        .then(json => res.send(json));

    // const data = require('./clients');
});

app.post('/api/getData', (req, res) => {

    const URL = req.body.url;
    fetch(URL, {
        method: 'GET',
        headers: {
            'Accept': 'text/json',
            'Content-Type': 'application/json'
        },
        body:null
    })
        .then(data => data.json()) // expecting a json response
        .then(json => res.send(json));
});


//
app.use('/api', customRoutes);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
