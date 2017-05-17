import { Line } from './line';
import {DataService} from './services';

//import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
//@inject(HttpClient)
@inject(DataService)
export class Raport {
	//////////////////////////////
var mariadb = require('mariasql');
var connection = require('express-mariaconnection');

var dbinfo = {
  host: '127.0.0.1:3306',
  user: 'root',
  password : 'root',
  charset: 'utf8',
  db: 'test'
}

app.use(connection(mariadb,dbinfo));

/////////////////////////////////////

module.exports = function(req, res) {
	req.getConnection(function(err,connection){
    connection.query('SHOW TABLES;',[],function(err,result){
			if(err) return res.status(400).json(err);

			return res.status(200).json(result);
    });
  });
}
/////////////////////////////////////////////////
	
	constructor() {
		this.lines = [];
		this.expected = {
			outcome: 0,
			income: 0,
			remainder: 0
		};

		this.actual = {
			outcome: 0,
			income: 0,
			remainder: 0
		};
		this.initFields();
	}

	initFields() {
		this.name = '';
		this.expectedSum = '';
		this.actualSum = '';
		this.type = 'Kulu';
		this.date = '';
		this.date2 = '';
	}
    userData = {}
	 //getData() {
     //// httpClient.fetch('http://jsonplaceholder.typicode.com/posts/1')
      //.then(response => response.json())
     // .then(data => {
      //   console.log(data);
     // });
	
	addLine() {
		const line = new LineFrom(this.name, parseFloat(this.expectedSum), parseFloat(this.actualSum), this.type, this.date);
		this.lines.push(line);
		this.initFields();
		this.calculate(line);
		

		let client = new HttpClient();
		
   }

		client.fetch('http://localhost:8080/andmed', {
			'method': 'GET',
			'body': json(this.userData)
		})
		.then(response => response.json())
		
	}

	removeLine(line) {
		const index = this.lines.indexOf(line);
		if (index !== -1) {
			this.lines.splice(index, 1);
			line.expectedSum = -line.expectedSum;
			line.actualSum = -line.actualSum;
			this.calculate(line);
		}
	}

	calculate(line) {
		if (line.type === 'Kulu') {
			this.expected.outcome += line.expectedSum;
			this.actual.outcome += line.actualSum;
		} else {
			this.expected.income += line.expectedSum;
			this.actual.income += line.actualSum;
		}
		this.expected.remainder = this.expected.income - this.expected.outcome;
		this.actual.remainder = this.actual.income - this.actual.outcome;
	}
	Kustuta(){
      console.log('');
	   location.reload(true);
	  
	  
   }
}