var express = require('express'),
	app = express();

app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Ready at http://localhost:3000/');
});

app.get('/', function (req, res) {
	res.sendfile('public/index.html');
});

app.get('/form', function (req, res) {
	res.sendfile('public/form.html');
});

app.post('/form', function (req, res) {
	console.log(req.body);
	res.redirect('/?text='+req.body.text+'&radio='+req.body.radio);
});