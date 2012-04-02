
var redis = require('redis');
var client = redis.createClient();

exports.index = function(req, res) {
    client.zrevrangebyscore('awesome', '+inf', '-inf', 'withscores', function(error, results){
    var responseString = "";
    var limit = 38; //will display 20, since the counts are part of the results
      if (results.length > limit){
        responseString += "<div class='linkurltop'> <a href='" + results[0] + "'>" + results[0] + "</a>" + " - " + results[1] + "</div><br />";
        
        for (var i = 2 ; i < limit ; i++) { 
           if (i%2 == 0){
                responseString += "<li> <a href='" + results[i] + "'>" + results[i] + "'</a>";
              }
             else if (i%2 == 1){
                responseString += " - " + results[i] + "</li><br />";
             }
            }
      }
      else {
        responseString += "<div class='linkurltop'> <a href='" + results[0] + "'>" + results[0] + "</a>" + " - " + results[1] + "</div><br />";
        for (var i = 2 ; i < results.length ; i++) { 
          if (i%2 == 0){
            responseString += "<li> <a href='" + results[i] + "'>" + results[i] + "'</a>";
          }
         else if (i%2 == 1){
            responseString += " - " + results[i] + "</li><br />";
         }
        }
      }

      res.render('word/awesome', {awesomeLinks:responseString});
  }); 

};

//top link: <div id=linkurltop>

