import { } from '';
import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';



@inject(HttpClient,json)
@inject(mariadb)
export class Reg {
	
uemail: string;
password_1: string;
password_2: string;
usernimi: string;
userperekonnanimi: string;
useradress: string;
usertelefon:string;
	
	
	 constructor(httpClient){
        this.http = httpClient;
    }
	 constructor() {
             this.MariaClient = require('mariadb').MariaClient;
        }
     testConnection() {
           return new Promise((resolve, reject) => {
             this.MariaClient.connect("mariadb://localhost:3306/test", function(err, db) {
           if(!err) {
             resolve("We are connected");
	          this.addUser();
           } else {
               reject(err);
             }
         });
      });
 
 
 constructor(db) {
   this.db = db;
   this.connectionResults = "";
  }
  
   activate() {
   this.db.testConnection()
    .then((promise) => this.connectionResults = promise)
    .catch((err) => this.connectionResults = err);
  }
  
	header = "Registreeri ";
	
		userData = {}
	  function   addUser() {
		

		let client = new HttpClient();

		client.fetch('http://localhost:3306/test', {
			'method': 'PUT',
			'body': json(this.userData)
		})
		
		db.readQuery('INSERT INTO users VALUES (?, ?)', ['John', 'john@example.com'])
  .then((dbResults) => {
    console.log('Insert', dbResults);
  }, (dbError) => {
    console.log('Error: ', dbError);
  });
		.then(response => response.json())
		.then(data => {
         console.log(data);
      });
	} 

	
}