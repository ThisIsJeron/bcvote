var http = require('http');
var express = require('express');
var twilio = require('twilio');

var app = express();

// Twilio Credentials
var accountSid = 'ACa2c293449cb04276aa45cdd8ac130342';
var authToken = 'ed115b94915402b317ff74151b981198';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+14088217529",
    from: "+14085603576",
    body: "This is the ship that made the Kessel Run in fourteen parsecs?",
}, function(err, message) {
    console.log(message.sid);
});


app.post('/sms', function(req, res) {
  var twilio = require('twilio');
  var twiml = new twilio.TwimlResponse();
  twiml.message('Thanks for voting!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, function () {
  console.log("Express server listening on port 1337");
});
