
import {HttpClient, json} from 'aurelia-fetch-client';

export class newPass {
	
	constructor(){
		
        this.uuspsw = 'psw';
		}
	header = "Parooli tellimine.";
	userData={}
	userList=[]
	constructor(){
		this.appName="adPortal"
		this.count=0
		console.log('construct')
	}
	
	 activate() {
     client.fetch('http://localhost:9000/users')
      .then(response => response.json())
      .then(users => this.userList= users);
      });
	
	 addUser() {
      client.fetch('http://localhost:9000/users',{
		  'method':"POST",
		  'body': json(this.userData)
	  })
      .then(response => response.json())
      .then(data => {
         console.log("Server saatis"+data.email);
      });
	
}