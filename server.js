// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function(req, res) {
  res.json({ greeting: 'hello API' });
});

// your first API endpoint... 
app.get("/api/timestamp/:time", function(req, res) {
  const timestamp = req.params.time;
  const date = getDate(timestamp);
  if (date != null ) {
    res.json({ unix: date.getTime(), utc: date.toString()});
  } else {
      res.json({ error: "Invalid Date" }); 
  }
});

const getDate = (timestamp) => {
  if (new Date(+timestamp) != "Invalid Date") {
    return new Date(+timestamp);
  } else if( new Date(timestamp) != "Invalid Date"){
    return new Date(timestamp);
  } else {
    return null;
  }
}


// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
