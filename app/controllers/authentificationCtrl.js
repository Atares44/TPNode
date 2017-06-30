const Controller = require('./Controller');
const csv_db = require('csv-db');
const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'emails.csv');
const csvDb = new csv_db(pathToFile, ['pseudo', 'email', 'password']);

class AuthentificationCtrl extends Controller {

	registration(req, res) {
        res.render('signIn/registration');
    }

	postregistration(req, res) {		

		if(!fs.existsSync(pathToFile)) {
    		fs.openSync(pathToFile, 'w');
		}

		const user = {
			pseudo: req.body.pseudo,
			email: req.body.email,
			password: req.body.password
		};

		csvDb.insert(user).then((data) => {
		  console.log("success "+data);
		}, (err) => {
		  console.log(err);
		});

	}

	login(req, res){
		res.render('authentification/login');
	}

	postlogin(req, res){
		res.render()//atares
	}
	
}
module.exports = AuthentificationCtrl;
