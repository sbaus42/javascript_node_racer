var express = require('express');
var app = express();
const PORT = 8080;

app.use(express.static('public'));
app.get('/', function(request, response){
  response.render(__dirname + '/public/index.ejs');
});
app.listen(PORT, function() {
  console.log('listening on port ' + PORT);
});
