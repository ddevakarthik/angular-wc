var express = require('express'),
    path = require('path');
	
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use('/', express.static('./views'));

app.get('*', function(req, res){
  res.sendFile(__dirname+'/views/index.html');
});

app.listen(3003);
console.log(`http://127.0.0.1:3003/`);
