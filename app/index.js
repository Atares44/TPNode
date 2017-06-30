const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const ArgumentParser = require('argparse').ArgumentParser;
const authenticationController = require('./controllers/authentificationCtrl');


app.use(express.static(path.join(__dirname, '/../public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new authenticationController();
app.get('/registration', authenticationCtrl.register.bind(authenticationCtrl));
app.get('/login', authenticationCtrl.login.bind(authenticationCtrl));

app.listen(3000);