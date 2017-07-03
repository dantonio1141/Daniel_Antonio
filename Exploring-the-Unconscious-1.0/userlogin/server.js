var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
	fs.readFile('./index.html', function(err, data) {
		res.write(data);
		res.end();
	});
});

console.log("now servering at localhost:3000/");
server.listen(3000);
