import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';

@inject(FetchConfig)

export class App {
  constructor(fetchConfig) {
    this.fetchConfig = fetchConfig;
  }

  configureRouter(config, router) {
    this.router = router;
    this.fetchConfig.configure();
    config.title = 'Rahaplaneerija'

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
