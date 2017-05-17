@inject(HttpClient,json)
@inject(sql_dump)
export class Insert {
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
 constructor() {
    this.message = ' Palun registreeri!';
    this.array = []; 
    this.array.push("")	
  }
  
  addToArray()
  {
    this.array.push(this.hello,this.email,this.password, this.nimi,this.pernimi,this.adress,this.telefon);


	hello = "";
	email = "";
	password = "";
	nimi = "";
	pernimi = "";
	adress = "";
	telefon = "";
	let client = new HttpClient();

		client.fetch('http://localhost:8080/Reg', {
			'method': 'POST',
			'body': json(this.array)
		})
		.then(response => response.json())
		db.readQuery('INSERT INTO users VALUES (hello, email,nimi,pernimi,adress,telefon)', ['John', 'john@example.com','','','',''])
  .then((dbResults) => {
    console.log('Insert', dbResults);
  }, (dbError) => {
    console.log('Error: ', dbError);
  });
	
  }
  Kustuta(){
     // console.log('');
	   alert('Teie andmed,'+this.email+',  oli salvestatud.' );
       //location.reload(true);
	   window.location = "http://localhost:9000/#/login";
	  
	  
   }
  
}