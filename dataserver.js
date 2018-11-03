
const express = require('express');

const server = express();

const mysql = require('mysql');

const credentials = require('./mysqlcreds.js');

const db = mysql.createConnection(credentials);

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

server.get('/randomname', function(request, response){
	db.connect( function(){
		db.query('SELECT * FROM usernames', function( error, data){
			if(!error){
				const count = parseInt(request.query.count);
				const nameArray = [];
				while(nameArray.length < count){
					const randomNameIndex = Math.floor(data.length * Math.random());
					nameArray.push( data[randomNameIndex].name)
				}
				
				const output = {
					success: true,
					data: nameArray
				}
				response.send( output );
			} else {
				response.send("oops");
			}
		});
	})
})

server.listen(3005, function(){
	console.log('the server is operational and angry');
})













