
var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});



	client.zrevrangebyscore('awesome', '+inf', '-inf', 'withscores', function(error, results){
		var responseString = "";

			for (var i = 0 ; i < results.length ; i++) {
				if (i%2 == 0){
					responseString += results[i];
				}
				else if (i%2 == 1){
					responseString += " - " + results[i] + "<br />";
				}
			}
			response.end(responseString);
	});	



}).listen(3000);

console.log('Server running on port 3000');


