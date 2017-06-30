const express = require('express');
const app = express();
const authenticationController = require('./controllers/authentificationCtrl');

app.use(express.static(path.join(__dirname, '/../public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/../views'));

const authenticationCtrl = new authenticationController();
app.get('/registration', authenticationCtrl.registration.bind(authenticationCtrl));
app.post('/registration', authenticationCtrl.postRegistration.bind(authenticationCtrl));

app.listen(3000);