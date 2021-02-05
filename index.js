// Require and create the Express framework
var express = require("express");
var app = express();

// Determine port to listen on
var port = process.env.PORT || process.env.VCAP_APP_PORT || 3099;

// Enable reverse proxy support in Express. This causes the
// the "X-Forwarded-Proto" header field to be trusted so its
// value can be used to determine the protocol. See
// http://expressjs.com/api#app-settings for more details.
app.enable("trust proxy");

// Add a handler to inspect the req.secure flag (see
// http://expressjs.com/api#req.secure). This allows us
// to know whether the request was via http or https.
app.use((req, res, next) => {
 
  if (req.secure === false && app.get("env") !== "development") {
    res.redirect("https://" + req.headers.host + req.url);
  } else {
    next();
  }
});

// Allow static files
app.use(express.static(__dirname + '/public'));
/*
app.use("/build", express.static(__dirname + "/build"));
app.use("/assets", express.static(__dirname + "/assets"));
app.use("/fonts", express.static(__dirname + "/fonts"));
app.use("/img", express.static(__dirname + "/img"));
app.use("./index.html", express.static(__dirname + "/index.html"));
*/

 
app.get("/.well-known/assetlinks.json", (request, response) => {
  response.sendFile(".well-known/assetlinks.json", {root: __dirname });
});
app.get("/", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});
app.get("/index.html", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});

// Start listening on the port
var server = app.listen(port, () => {
  console.log(
    "Listening on port %d",
    server.address().port,
    " ENV:",
    app.get("env")
  );
});
