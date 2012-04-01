
var redis = require('redis');
var client = redis.createClient();

exports.index = function(req, res) {
    client.zrevrangebyscore('awesome', '+inf', '-inf', 'withscores', function(error, results){
    var responseString = "";
    var limit = 38; //will display 20, since the counts are part of the results

      for (var i = 0 ; i < limit ; i++) { 
        if (i%2 == 0){
          responseString += "<li> <a href='>" + results[i] + "'>" + results[i] + "'</a>";
        }
       else if (i%2 == 1){
          responseString += " - " + results[i] + "</li><br />";
       }
      }
      res.render('word/awesome', {awesomeLinks:responseString});
  }); 

};

