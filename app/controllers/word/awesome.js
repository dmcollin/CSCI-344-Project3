
var redis = require('redis');
var client = redis.createClient();

exports.index = function(req, res) {
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
      res.render('word/awesome', {awesomeLinks:responseString});
  }); 

};

