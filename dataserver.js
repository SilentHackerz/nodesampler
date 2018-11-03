
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
		const result = db.query(`SELECT * FROM usernames ORDER BY RAND() LIMIT ${request.query.count}`, function( error, data){
			if(!error){
				
				const output = {
					success: true,
					data: data
				}
				response.send( output );
			} else {
				console.log(result.sql);
				console.log(error);
				response.send("oops");
			}
		});
	})
})

server.listen(3005, function(){
	console.log('the server is operational and angry');
})













