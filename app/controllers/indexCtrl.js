const Controller = require('./Controller');

class IndexCtrl extends Controller {
    index(req, res) {
        console.log("index");
        res.render('index/index');

        //res.render(this._config.defaultName)
    }
}

module.exports = IndexCtrl;