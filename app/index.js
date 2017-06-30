//import
const express = require('express');
const path = require('path');
const csv_db = require('csv-db')
const app = express();
const bodyParser = require('body-parser');
const ArgumentParser = require('argparse').ArgumentParser;
const authenticationController = require('./controllers/authentificationCtrl');
const indexController = require('./controllers/indexCtrl');

//TODO : Redirection si l'utilisateur veux skip la page de connexion/inscription
//TODO : Correction du fichier CSV qui ajoute systematiquement une ligne [user, password, mail]
//TODO : 3eme page icomplète
//TODO : peristence de la connexion
//TODO : connexion valide que si il est enregister en csv
//TODO : gestion des erreurs, des issues, etc..

const config = {
   defaultName: 'index/index'
};

//parser le body
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new authenticationController(config);
app.get('/registration', authenticationCtrl.registration.bind(authenticationCtrl));
app.get('/login', authenticationCtrl.login.bind(authenticationCtrl));
app.get('/emailList', authenticationCtrl.emailList.bind(authenticationCtrl));

app.post('/registration', authenticationCtrl.postregistration.bind(authenticationCtrl));
//app.post('/emailList', authenticationCtrl.postemailList.bind(authenticationCtrl));

const indexCtrl = new indexController(config);
app.get('/', indexCtrl.index.bind(indexCtrl));

app.listen(3000);