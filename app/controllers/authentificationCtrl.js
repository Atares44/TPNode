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
        res.render('authentification/login');
    }


	postregistration(req, res) {		

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
		  res.render('success');
		}, (err) => {
		  console.log(err);
		});

	}



	postlogin(req, res){

		const USER = {
            id: req.body.email,
            pseudo: req.body.pseudo,
            password: req.body.password
        };

        //if (csvDb.get(req.body.email) === USER) { console.log("god damn it"); }


        console.log("field " + req.body.email)
        console.log("success "+csvDb.get(req.body.email));
		//if(csv.get(req.body.email).email === req.body.email) { console.log("god damn it");}
		//console.log("success "+req.body.email);

		res.render('emailList/emailList')
	}

    emailList(req, res) {
        res.render('emailList/emailList');
    }

    postemailList(req, res) {

    }
	
}
module.exports = AuthentificationCtrl;
