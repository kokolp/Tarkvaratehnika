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
  			route: "kalkulaator",
  			moduleId: "kalkulaator",
  			title: "Eelarve kalkulaator",
  			nav: true
  		},
      {
        route: "login",
        moduleId: "login",
        title: "Logi sisse",
        nav: true
      },
  	])
  } 
}
