var soap = require('soap');
var express = require('express');
var app = express();


var service = { 

				Employee_Service : {
								Employee_Port : {

														getEmployee: function(args){

																	if(args.key === 1234)
																	{

																		var name = "Radha";
																		console.log("The employee name is : " + empName);
																		return { empName: name};
																	}

														}



											}


							}

			}



var xml = require('fs').readFileSync('./getEmployee.wsdl', 'utf8');
var server = app.listen(3003);

soap.listen(server,'/getEmployee',service,xml);

console.log("WebServer started on 3003");