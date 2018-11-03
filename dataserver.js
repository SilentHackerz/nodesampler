
const express = require('express');

const server = express();

server.use( express.static(__dirname + '/html' ));

server.get('/hello', function(request, response){
	console.log('got request on hello');
	response.send('why hello yourself, sailor');
})

server.listen(3005, function(){
	console.log('the server is operational and angry');
})