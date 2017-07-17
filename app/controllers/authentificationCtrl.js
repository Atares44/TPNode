const Controller = require('./Controller');
const csv_db = require('csv-db');
const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'emails.csv');
const csvDb = new csv_db(pathToFile, ['id', 'pseudo', 'password']);

class AuthentificationCtrl extends Controller {

	registration(req, res) {
        res.render('signIn/registration');
    }

    emailList(req, res) {
        res.render('emailList/emailList');
	}
	
    login(req, res){
        console.log('login');
        res.render('authentification/login');
    }

	postregistration(req, res) {		
		console.log("postregistration");
		if(!fs.existsSync(pathToFile)) {
    		fs.openSync(pathToFile, 'w');
		}

		const user = {
            id: req.body.email,
			pseudo: req.body.pseudo,
			password: req.body.password
		};

		csvDb.insert(user).then((data) => {
		  console.log("success "+data);
		}, (err) => {
		  console.log(err);
		});

	}

	postlogin(req, res){

        console.log("field " + req.body.email);
		//if(csv.get(req.body.email).email === req.body.email) { console.log("god damn it");}

		res.render('emailList/emailList')
	}

}
module.exports = AuthentificationCtrl;
