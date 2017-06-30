const Controller = require('./Controller');
const csv_db = require('csv-db');
const csvDb = new csv_db('emails.csv', ['pseudo', 'email', 'password']);

class AuthentificationCtrl extends Controller {

	registration(req, res) {
		console.log("in the registration");
		res.render('registration');
	}

	postRegistration(req, res) {
		console.log("in the post registration");
		
		const user = {
			pseudo: req.body.pseudo,
			email: req.body.email,
			password: req.body.password
		};

		csvDb.insert(user).then((data) => {
		  console.log(data);
		}, (err) => {
		  console.log(err);
		});
	}

	login(req, res){
		res.render('authentication/login');
	}
	postlogin(req, res){
		console.log(req.body)
		res.render()//atares
	}
	
}
module.exports = AuthentificationCtrl;
