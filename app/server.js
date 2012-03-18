
var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});

		count = client.zcount('awesome');

		client.zrevrangebyscore('awesome', '+inf', '-inf', 'withscores', function(err, results){
			response.end('Awesome Links: ' + "<br />" + results);
	});


}).listen(3000);

console.log('Server running on port 3000');



