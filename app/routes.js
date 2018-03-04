module.exports = function(express) {

  express.get('/', function (req, res) {
    res.sendFile(__dirname + '/app.html');
  });

  express.get('/app.css', function (req, res) {
    res.sendFile(__dirname + '/app.css');
  });

  express.get('/custom.css', function (req, res) {
    res.sendFile(__dirname + '/custom.css');
  });

  express.get('/app.js', function (req, res) {
    res.sendFile(__dirname + '/app.js');
  });

  express.get('/fonts/fontawesome-webfont.ttf', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.ttf');
  });

  express.get('/fonts/fontawesome-webfont.woff2', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.woff2');
  });

  express.get('/fonts/fontawesome-webfont.woff', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.woff');
  });

  express.get('/fonts/fontawesome-webfont.ttf', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.ttf');
  });

  express.get('/app/images/customer.svg', function (req, res) {
    res.sendFile(__dirname + '/images/customer.svg');
  });

  express.get('/app/images/formeras.svg', function (req, res) {
    res.sendFile(__dirname + '/images/formeras.svg');
  });

};