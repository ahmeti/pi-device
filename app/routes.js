module.exports = function(app) {

  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/app.html');
  });

  app.get('/app.css', function (req, res) {
    res.sendFile(__dirname + '/app.css');
  });

  app.get('/custom.css', function (req, res) {
    res.sendFile(__dirname + '/custom.css');
  });

  app.get('/app.js', function (req, res) {
    res.sendFile(__dirname + '/app.js');
  });

  app.get('/fonts/fontawesome-webfont.ttf', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.ttf');
  });

  app.get('/fonts/fontawesome-webfont.woff2', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.woff2');
  });

  app.get('/fonts/fontawesome-webfont.woff', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.woff');
  });

  app.get('/fonts/fontawesome-webfont.ttf', function (req, res) {
    res.sendFile(__dirname + '/fonts/fontawesome-webfont.ttf');
  });

  app.get('/app/images/customer.svg', function (req, res) {
    res.sendFile(__dirname + '/images/customer.svg');
  });
  
};