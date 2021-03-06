var path = require("path");
var fs = require("fs");


// API Routes
// =============================================================

module.exports = function(app) {

	app.get("/api/458", function(req, res) {
		fs.readFile("./app/data/webpages_458.js", "utf8", function(err, data) {
			res.send(data);
		}); // End .readFile
	});

	app.get("/api/691", function(req, res) {
		fs.readFile("./app/data/webpages_691.js", "utf8", function(err, data) {
			res.send(data);
		}); // End .readFile
	});

	app.get("/api/:id", function(req, res) {
		var id = req.params.id;
		fs.readFile("./app/data/webpages_id" + id + ".json", "utf8", function(err, data) {

			res.send(data);
		}); // End .readFile


	});

}


