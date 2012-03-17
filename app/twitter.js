var twitter = require('ntwitter');
var redis = require('redis');
var credentials = require('./credentials.js'); //read credentials from file
var URL;

//create redis client
var client = redis.createClient(); //using local redis server, no arguments required

var twitter = new twitter({
	//use credentials from credentials.js
	consumer_key: credentials.consumer_key,
    consumer_secret: credentials.consumer_secret,
    access_token_key: credentials.access_token_key,
    access_token_secret: credentials.access_token_secret

});

twitter.stream(
	'statuses/filter', //return statuses that match tracked keywords
	
	{track: ['awesome']}, //track tweets that contain keywords defined in variable

	function(stream){
		stream.on('data', function(tweet){
			//console.log(tweet.text); //write the tweets to the console

		try {
			if (tweet.entities.urls[0].expanded_url != " ") { 
				URL = tweet.entities.urls[0].expanded_url;
				}
			else if (tweet.entities.urls[0].url !=  " ") {
				URL = tweet.entities.urls[0].url;
				}
			console.log(URL);
			}
		catch (error) {
			}
			
		});
	}
);


