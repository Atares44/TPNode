const Controller = require('./Controller');

class AuthentificationCtrl extends Controller {

	registration(req, res) {
		console.log("in the registration");
		res.render('signIn/registration');
	}

	postregistration(req, res) {
		console.log(req.body);
		res.render(); //gaetan
	}

	login(req, res){
		res.render('authentification/login');
	}

	postlogin(req, res){
		console.log(req.body)
		res.render()//atares
	}
	
}
module.exports = AuthentificationCtrl;