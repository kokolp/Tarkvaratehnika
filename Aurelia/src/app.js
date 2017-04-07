export class App {
  constructor() {
    this.message = 'Hello World!';
  }


  configureRouter(config, router) {
  	this.router = router;

  	config.map([
  		{
  			route: ["", "root"],
  			moduleId: "root",
  			title: "Rahaplaneerija",
  			nav: true
  		},
  		{
  			route: "login",
  			moduleId: "login",
  			title: "Login",
  			nav: true
  		},
  		{
  			route: "kalkulaator",
  			moduleId: "kalkulaator",
  			title: "Eelarvekalkulaator",
  			nav: true
  		},
  	])
  } 
}
