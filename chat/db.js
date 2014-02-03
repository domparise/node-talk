exports.init = function (cb) {
	// establish a connection to mongo 
	require('mongodb').MongoClient.connect('mongodb://localhost/chat', function (err,db) {
		if (err) throw err;

		var chat = db.collection('chat');

		chat.remove(function(){});

		Chat = {
			add: function (room, msg, cb) {
				msg.date = new Date();
				chat.update({ room:room },{ $push: {msgs:msg} },{upsert:true}, function (err,added) {
					if(err) console.log(err);
					return cb(added);
				});
			},
			load: function (room, cb) {
				chat.find({room:room},{msgs:true,_id:false}).toArray( function (err,found) {
					if(err) console.log(err);
					return cb(found[0]);
				});
			}
		};

		return cb( Chat );
	});
};