

export class App {
	 configureRouter(config, router){
      config.title = 'Aurelia';
		
      config.map([
         { route: ['','home'],  name: 'home',  
            moduleId: './components/home/home',  nav: true, title:'Avaleht' },
			{ route: 'tingimused',  name: 'tingimused',
            moduleId: './components/tingimused/tingimused',    nav: true, title:'Tingimused' },
			{ route: 'kalkulaator',  name: 'kalkulaator',
            moduleId: './components/kalkulaator/kalkulaator',    nav: true, title:'Kalkulaator' },
			{ route: 'login',  name: 'login',
            moduleId: './components/login/login',    nav: true, title:'' },
			{ route: 'reg',  name: 'reg',
            moduleId: './components/reg/reg',    nav: true, title:'' },
			{ route: 'newpass',  name: 'newpass',
            moduleId: './components/newpass/newpass',    nav: true, title:'' },
			{ route: 'sisse',  name: 'sisse',
            moduleId: './components/sisse/sisse',    nav: true, title:'' },
			{ route: 'raport',  name: 'raport',
            moduleId: './components/raport/raport',    nav: true, title:'' },
			{ route: 'insert',  name: 'insert',
            moduleId: './components/insert/insert',    nav: true, title:'' },
			{ route: 'login',  name: 'login',
            moduleId: './components/login/login',    nav: true, title:'' }
      ]);

      this.router = router;
   }
  

   login(username, password) {
    this.http
      .post(config.loginUrl, { username, password })
      .then((response) => response.content)
      .then((session) => {
        localStorage[config.tokenName] = JSON.stringify(session);
        this.session = session;
        this.app.setRoot('app');
    });
	
	if (this.username && this.password) {
      this.auth.login(this.username, this.password)
    } else {
      this.error = 'Please enter a username and password.';
    }
  }
   
 
	logout() {
  localStorage.removeItem('profile');
  localStorage.removeItem('id_token');
  this.isAuthenticated = false;
}

}

