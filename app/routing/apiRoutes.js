var path = require("path");
var fs = require("fs");


// API Routes
// =============================================================

module.exports = function(app) {

	var brandDataArr = [];

	fs.readFile("./app/data/brands.js", "utf8", function(err, data) {

		var brands = JSON.parse(data);

		for (var i = 0; i < brands.length; i++) {
				brandData = {
					name: brands[i].Name,
					id: trips[i].Id
				}
			brandDataArr.push(brandData);
		}

		}); // End .readFile


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

	// app.get("/api/campaigns/:id", function(req, res) {
	// 	var id = req.params.id;
	// 	fs.readFile("./app/data/campaigns.js", "utf8", function(err, data) {
	// 		var campaignObj = JSON.parse(data);
	// 		var campaign = campaignObj.id;
	// 		console.log(campaign);
	// 		//res.send(campaign);
	// 	}); // End .readFile
	// });

	app.get("/api/:id", function(req, res) {
		var id = req.params.id;
		fs.readFile("./app/data/webpages_id" + id + ".json", "utf8", function(err, data) {

			res.send(data);
		}); // End .readFile


	});

}


