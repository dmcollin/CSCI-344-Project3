
var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});


		var count = 5; //client.zcount('awesome', '-inf', '+inf');

		client.zrevrangebyscore('awesome', '+inf', '-inf', function(error, results){

			var linkString;

			for (var i=0; i<count; i++){
				linkString += results[i] + '<br />';
			}
			
			response.end(linkString);
				
		});


}).listen(3000);

console.log('Server running on port 3000');


