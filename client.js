var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var soap = require('soap');
var url = "http://localhost:3003/getEmployee?wsdl";
var key = 0;



app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());



app.get('/', function(req, res){


	res.sendFile(path.join(__dirname,'./input.html'));


});



app.post('/', function(req, res){


	
	console.log("The key is : " + req.body.key);
	key = req.body.key;
	var args = {empKey: key};

	soap.createClient(url, function(err, client){

			if(err){ throw err; }

			client.getEmployee(args, function(err, response){

					if(err){ throw err; }

					console.log(response);
					res.send(response);


			}); // end getEmployee



	}); // end createClient

});  // end post


app.listen(3002);

console.log("Server started on 3002");