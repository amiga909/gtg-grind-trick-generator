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

app.get("/sw.js", (request, response) => {
  response.sendFile("public/sw.js", {root: __dirname });
});
app.get("/sw.js.map", (request, response) => {
  response.sendFile("public/sw.js.map", {root: __dirname });
});

app.get("/vendor/workbox-v6.1.0/workbox-core.prod.js", (request, response) => {
  response.sendFile("./vendor/workbox-v6.1.0/workbox-core.prod.js", {root: __dirname });
});


app.use(express.static(__dirname + '/public'));
 
 
app.get("/.well-known/assetlinks.json", (request, response) => {
  response.sendFile(".well-known/assetlinks.json", {root: __dirname });
});

app.get("/", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});
 

app.get("/index.html", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});

app.get("/tricktionary", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});

app.get("/about", (request, response) => {
  response.sendFile("public/index.html", {root: __dirname });
});

app.get("/sitemap.xml", (request, response) => {
  response.sendFile("./sitemap.xml", {root: __dirname });
});

app.get("/robots.txt", (request, response) => {
  response.sendFile("./robots.txt", {root: __dirname });
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
