import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';
import {AuthService} from 'aurelia-auth';

@inject(AuthService)
export class Login {
	constructor(auth){
		this.register = false;
		this.auth = auth;
	}

	toggleRegister(){
		this.register = true;
	}
	
	userData = {}
	error = null
	addUser() {
		if(this.userData.password!= this.userData.password2) {
			this.error = true;
			return 
		}

		let client = new HttpClient();

		client.fetch('http://localhost:8080/users/add', {
			'method': 'POST',
			'body': json(this.userData)
		})
		.then(response => response.json())
	} 

	loginUser() {
        return this.auth.login(this.userData.email, this.userData.password)
        .then(response=> console.log("success logged " + response))
        .catch(err=> console.log("login failure"));
    
	}
}

