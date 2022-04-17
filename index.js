const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

const appRoute = require('./src/routes/routes');
app.use('/', appRoute);

app.listen(8080, () => console.log('App running on port : 8080'));