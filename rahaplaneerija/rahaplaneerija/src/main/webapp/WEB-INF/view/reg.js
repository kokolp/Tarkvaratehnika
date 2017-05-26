

var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "test"
    });

    con.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      var sql = "INSERT INTO klient(email,password,nimi,per_nimi,adress,telefon,role) VALUES ('tulu', 'avans','300','500','20-07-2017','799979','user')";
      con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
    