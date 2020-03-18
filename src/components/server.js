
var http = require("https");
let stats = []
var options = {
	"method": "GET",
	"hostname": "coronavirus-monitor.p.rapidapi.com",
	"port": null,
	"path": "/coronavirus/worldstat.php",
	"headers": {
		"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
		"x-rapidapi-key": "3ed67863c9msh6fef70d2c5e7b0bp191821jsnbaa6cdb5f20b"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
        console.log(body.toString());
        stats = body.toString()
	});
});
req.end();
