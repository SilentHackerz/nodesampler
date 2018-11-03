
const express = require('express');

const server = express();

const mysql = require('mysql');

server.use( express.static(__dirname + '/html' ));

server.get('/', function(request, response){
	const fs = new fileopen()
	console.log('got request on hello');
	response.send('why hello yourself, sailor');
})

server.get('/randomtime', function(request, response){
	const randomNumber = 100 * Math.random();
	response.send(`<strong>${randomNumber}</strong>`);
})

server.listen(3005, function(){
	console.log('the server is operational and angry');
})