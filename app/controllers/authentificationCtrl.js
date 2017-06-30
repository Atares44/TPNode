const Controller = require('./Controller');

class AuthentificationCtrl extends Controller {

	registration{}

	login(req, res){
		res.render('authentication/login');
	}
	postlogin(req, res){
		console.log(req.body)
		res.render()//atares
	}
	module.exports = AuthentificationCtrl;
}