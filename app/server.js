
var http = require('http');
var redis = require('redis');
var client = redis.createClient();

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});


		

		client.zrevrangebyscore('awesome', '+inf', '-inf', function(error, results){
		//client.zrevrangebyscore('awesome', '+inf', '-inf', 'withscores', function(error, results){
			var linkString;
			var count = 15; //client.zcount('awesome', '-inf', '+inf');


			for (var i=0; i<count; i++){
				//var score = client.zscore('awesome', 'i');

				linkString += results[i] + '<br />' +
				// ' Score - ' + score + '<br />' +
				 ' Count - ' + i + '<br /> <br />';
			}
			
			response.end(linkString);
				
		});


}).listen(3000);

console.log('Server running on port 3000');


