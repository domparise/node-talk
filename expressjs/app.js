// modules used by our app
var express = require('express');

// initialize an express application like so 
var application = express();

// express boilerplate, initializes environment and middleware
application.use( express.logger('dev') ); 	// tell the app to log requests
application.use( express.json() );			// to parse all json into objects
application.use( express.urlencoded() );		// to parse information encoded in the url
application.use( express.static('public') );	// and automatically serve up all static files found in /public

// tell our application to listen, or accept requests, on port 3000
application.listen(3000, function () {
	console.log('Ready at http://localhost:3000/');
});

// literally read as:
// when the application receives a GET request to route '/', 
application.get('/', handleRequest); 
// call the handleRequest function

// which is a function on a request and response
function handleRequest (request, response) { 
	// where we send the file located at public/index.html as a response
	response.sendfile('public/index.html');
};


// route a GET request to '/form'  
// this is the same as above, but we just declare the function inline,
// the function is only used in this context, so we can save code by keeping it 'anonymous'
application.get('/form', function (request, response) {
	response.sendfile('public/form.html');
});


// route a POST reqeust to '/form'
// because the names of these arguments dont matter, 
// you'll often see terse node code like this  
application.post('/form', function (req, res) {
	// log the object that is the body of the request to terminal
	console.log(req.body);
	// and also add these to the url route of the home page, just to show it
	res.redirect('/?text=' + req.body.text + '&radio=' + req.body.radio);
});
