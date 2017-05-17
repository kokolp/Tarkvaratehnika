var mysqlDump = require('mysqldump');

mysqlDump({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'test',
	tables:['klient']['info'], // only these tables
	dest:'./data.sql' // destination file
},function(err){
	//  data.sql file;
})
