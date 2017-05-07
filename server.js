const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

// Twilio Credentials
var accountSid = 'ACa2c293449cb04276aa45cdd8ac130342';
var authToken = 'ed115b94915402b317ff74151b981198';

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+14088217529",
    from: "+14085603576",
    body: "Hello Jeron, please indicate your vote for the 2020 presidential election: ",
}, function(err, message) {
    console.log(message.sid);
});


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();
  var str1 = 'Your vote has been recorded. Your country thanks you for voting! Your block is: ';
  var str2 = '0d75273fbae32797590a577acfdaf8fe022b12a8abf4a3549cc9a208cbc99d42';
  var banana = str1.concat(str2);
  twiml.message(banana);

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
