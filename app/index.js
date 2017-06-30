const express = require('express');
const path = require('path');
const csv_db = require('csv-db')
const app = express();
const bodyParser = require('body-parser');
const ArgumentParser = require('argparse').ArgumentParser;
const authenticationController = require('./controllers/authentificationCtrl');

const config = {
   defaultName: 'test'
};

app.use(express.static(path.join(__dirname, '/../public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new authenticationController(config);
app.post('/registration', authenticationCtrl.postRegistration.bind(authenticationCtrl));
app.get('/registration', authenticationCtrl.registration.bind(authenticationCtrl));
app.get('/login', authenticationCtrl.login.bind(authenticationCtrl));

app.post('/registration', authenticationCtrl.postregistration.bind(authenticationCtrl));
app.post('/login', authenticationCtrl.postlogin.bind(authenticationCtrl));

app.listen(3000);