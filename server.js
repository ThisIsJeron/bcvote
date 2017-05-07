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
    body: "Hello, please indicate who you are voting for",
}, function(err, message) {
    console.log(message.sid);
});


app.post('/sms', (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message('Thanks for voting!');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
