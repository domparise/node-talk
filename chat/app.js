// modules used by our app
var express = require('express.io'),
	db = require('./db.js'),
	app = express();
	app.http().io();

app.listen(3000,function(){
	console.log('Ready to go on port 3000');
});

app.set('views','views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.static('public'));

app.get('/', function (req,res) {
	res.render('index',{});
});


// Chat functionality
db.init( function (chat) {

	app.get('/chat/:room', function (req,res) {
		Chat.load(req.params.room, function (chat) {
			if(chat !== undefined){
				res.render('chat',{room:req.params.room,msgs:chat.msgs});
			}
			res.render('chat',{room:req.params.room,msgs:[]});
		});
	});

	app.io.route('chat', function (req) {
		req.io.join(req.data.room);
		Chat.add(req.data.room,{text:req.data.text,user:req.socket.id}, function() {
			app.render('post',{ user:req.socket.id, time:new Date(), text:req.data.text }, function (err, html) {
				if(err) console.log(err);
				req.io.room(req.data.room).broadcast('chatter',html);
			});
		});
	});

});