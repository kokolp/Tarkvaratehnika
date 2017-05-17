import { Line } from './line';

//import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
//@inject(HttpClient)
export class Sisse{
	/////////////////////////////////////////
	var mariadb = require('mariasql');
var connection = require('express-mariaconnection');

var dbinfo = {
  host: 'localhost',
  user: 'root',
  password : '',
  charset: 'utf8',
  db: 'mydatabase'
}

app.use(connection(mariadb,dbinfo));
/////////////////////////////
	
	
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
	}
    userData = {}
	
	addLine() {
		const line = new Line(this.name, parseFloat(this.expectedSum), parseFloat(this.actualSum), this.type, this.date);
		this.lines.push(line);
		this.initFields();
		this.calculate(line);
		

		let client = new HttpClient();

		client.fetch('http://localhost:8080/', {
			'method': 'POST',
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