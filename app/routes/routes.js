'use strict';

var path = process.cwd();
var whoami = require(path + '/app/controllers/whoami');

module.exports = function (app) {
	// For fcc, whoami
	app.route('/api/whoami')
		.get(function (req, res) {
			var output = whoami.whoAmI(req);
			res.send(output);
		});
};
