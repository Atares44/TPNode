const express = require('express');
const path = require('path');
const csv_db = require('csv-db')
const app = express();
const bodyParser = require('body-parser');
const ArgumentParser = require('argparse').ArgumentParser;
const authenticationController = require('./controllers/authentificationCtrl');
const indexController = require('./controllers/indexCtrl');

const config = {
   defaultName: 'index/index'
};

app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new authenticationController(config);
app.get('/registration', authenticationCtrl.registration.bind(authenticationCtrl));
app.get('/login', authenticationCtrl.login.bind(authenticationCtrl));
app.get('/list', authenticationCtrl.postlogin.bind(authenticationCtrl));

app.post('/registration', authenticationCtrl.postregistration.bind(authenticationCtrl));
app.post('/login', authenticationCtrl.postlogin.bind(authenticationCtrl));
app.post('/list', authenticationCtrl.postlogin.bind(authenticationCtrl));

const indexCtrl = new indexController(config);
app.get('/', indexCtrl.index.bind(indexCtrl));


app.listen(3000);