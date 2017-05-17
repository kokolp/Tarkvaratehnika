define('app',['exports'], function (exports) {
         'use strict';

         Object.defineProperty(exports, "__esModule", {
                  value: true
         });

         function _classCallCheck(instance, Constructor) {
                  if (!(instance instanceof Constructor)) {
                           throw new TypeError("Cannot call a class as a function");
                  }
         }

         var App = exports.App = function () {
                  function App() {
                           _classCallCheck(this, App);
                  }

                  App.prototype.configureRouter = function configureRouter(config, router) {
                           config.title = 'Aurelia';

                           config.map([{ route: ['', 'home'], name: 'home',
                                    moduleId: './components/home/home', nav: true, title: 'Avaleht' }, { route: 'tingimused', name: 'tingimused',
                                    moduleId: './components/tingimused/tingimused', nav: true, title: 'Tingimused' }, { route: 'kalkulaator', name: 'kalkulaator',
                                    moduleId: './components/kalkulaator/kalkulaator', nav: true, title: 'Kalkulaator' }, { route: 'login', name: 'login',
                                    moduleId: './components/login/login', nav: true, title: '' }, { route: 'reg', name: 'reg',
                                    moduleId: './components/reg/reg', nav: true, title: '' }, { route: 'newpass', name: 'newpass',
                                    moduleId: './components/newpass/newpass', nav: true, title: '' }, { route: 'sisse', name: 'sisse',
                                    moduleId: './components/sisse/sisse', nav: true, title: '' }, { route: 'raport', name: 'raport',
                                    moduleId: './components/raport/raport', nav: true, title: '' }, { route: 'insert', name: 'insert',
                                    moduleId: './components/insert/insert', nav: true, title: '' }, { route: 'login', name: 'login',
                                    moduleId: './components/login/login', nav: true, title: '' }]);

                           this.router = router;
                  };

                  App.prototype.login = function login(username, password) {
                           var _this = this;

                           this.http.post(config.loginUrl, { username: username, password: password }).then(function (response) {
                                    return response.content;
                           }).then(function (session) {
                                    localStorage[config.tokenName] = JSON.stringify(session);
                                    _this.session = session;
                                    _this.app.setRoot('app');
                           });

                           if (this.username && this.password) {
                                    this.auth.login(this.username, this.password);
                           } else {
                                    this.error = 'Please enter a username and password.';
                           }
                  };

                  App.prototype.logout = function logout() {
                           localStorage.removeItem('profile');
                           localStorage.removeItem('id_token');
                           this.isAuthenticated = false;
                  };

                  return App;
         }();
});
define('authConfig',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    var configForDevelopment = {
        providers: {
            google: {
                clientId: '239531826023-ibk10mb9p7ull54j55a61og5lvnjrff6.apps.googleusercontent.com'
            },

            linkedin: {
                clientId: '778mif8zyqbei7'
            },
            facebook: {
                clientId: '1452782111708498'
            }
        },
        loginUrl: 'http://localhost:8080/login'

    };

    var configForProduction = {
        providers: {
            google: {
                clientId: '239531826023-3ludu3934rmcra3oqscc1gid3l9o497i.apps.googleusercontent.com'
            },

            linkedin: {
                clientId: '7561959vdub4x1'
            },
            facebook: {
                clientId: '1653908914832509'
            }

        }
    };
    var config;
    if (window.location.hostname === 'localhost') {
        config = configForDevelopment;
    } else {
        config = configForProduction;
    }

    exports.default = config;
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('kalkuscript',[], function () {
    "use strict";

    document.getElementById("lisa-rida").onclick = function () {
        var liik = document.getElementById("liik").value;
        var summa = parseInt(document.getElementById("summa").value, 10);
        var summa2 = parseInt(document.getElementById("summa2").value, 10);
        var kulutulu = document.getElementById("kulutulu").value;

        var ridaElement = document.createElement('tr');
        var rida = '<td>' + liik + '</td>\n';
        rida += '<td>' + summa + '</td>\n';
        rida += '<td>' + summa2 + '</td>\n';
        rida += '<td>' + kulutulu + '</td>\n';

        ridaElement.innerHTML = rida;

        document.getElementById("table-body").appendChild(ridaElement);

        var table = document.getElementById("table2");
        var prognoositudtuludkokku = parseInt(table.rows[1].cells[1].innerHTML, 10);
        var prognoositudkuludkokku = parseInt(table.rows[1].cells[2].innerHTML, 10);
        var prognoositudjääk = parseInt(table.rows[1].cells[3].innerHTML, 10);
        var tegeliktuludkokku = parseInt(table.rows[2].cells[1].innerHTML, 10);
        var tegelikkuludkokku = parseInt(table.rows[2].cells[2].innerHTML, 10);
        var tegelikjääk = parseInt(table.rows[2].cells[3].innerHTML, 10);

        if (kulutulu === "Tulu") {
            prognoositudtuludkokku += summa;
            tegeliktuludkokku += summa2;

            table.rows[1].cells[1].innerHTML = prognoositudtuludkokku;
            table.rows[2].cells[1].innerHTML = tegeliktuludkokku;
        } else if (kulutulu === "Kulu") {
            prognoositudkuludkokku += summa;
            tegelikkuludkokku += summa2;

            table.rows[1].cells[2].innerHTML = prognoositudkuludkokku;
            table.rows[2].cells[2].innerHTML = tegelikkuludkokku;
        }

        table.rows[1].cells[3].innerHTML = prognoositudtuludkokku - prognoositudkuludkokku;
        table.rows[2].cells[3].innerHTML = tegeliktuludkokku - tegelikkuludkokku;
    };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('sql_dump',['mysqldump'], function (mysqlDump) {
	'use strict';

	mysqlDump({
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'test',
		tables: ['klient']['info'],
		dest: './data.sql' }, function (err) {});
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/home/home',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Meist = exports.Meist = function Meist() {
		_classCallCheck(this, Meist);

		this.header = "Rahaplaneerija aitab kliendil näha, kui palju ja millistele toodetele on tema raha kulunud.";
		this.content = "Klient pääseb rahaplaneerijasse läbi veebilehe.";
		this.content2 = "";
	};
});
define('components/kalkulaator/kalkulaator',['exports', './line'], function (exports, _line) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Kalkulaator = undefined;

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Kalkulaator = exports.Kalkulaator = function () {
		function Kalkulaator() {
			_classCallCheck(this, Kalkulaator);

			this.lines = [];
			this.expected = {
				outcome: 0,
				income: 0,
				remainder: 0
			};

			this.actual = {
				outcome: 0,
				income: 0,
				remainder: 0
			};
			this.initFields();
		}

		Kalkulaator.prototype.initFields = function initFields() {
			this.name = '';
			this.expectedSum = '';
			this.actualSum = '';
			this.type = 'Kulu';
			this.date = '';
		};

		Kalkulaator.prototype.addLine = function addLine() {
			var line = new _line.Line(this.name, parseFloat(this.expectedSum), parseFloat(this.actualSum), this.type, this.date);
			this.lines.push(line);
			this.initFields();
			this.calculate(line);
		};

		Kalkulaator.prototype.removeLine = function removeLine(line) {
			var index = this.lines.indexOf(line);
			if (index !== -1) {
				this.lines.splice(index, 1);
				line.expectedSum = -line.expectedSum;
				line.actualSum = -line.actualSum;
				this.calculate(line);
			}
		};

		Kalkulaator.prototype.calculate = function calculate(line) {
			if (line.type === 'Kulu') {
				this.expected.outcome += line.expectedSum;
				this.actual.outcome += line.actualSum;
			} else {
				this.expected.income += line.expectedSum;
				this.actual.income += line.actualSum;
			}
			this.expected.remainder = this.expected.income - this.expected.outcome;
			this.actual.remainder = this.actual.income - this.actual.outcome;
		};

		Kalkulaator.prototype.Kustuta = function Kustuta() {
			console.log('');
			location.reload(true);
		};

		return Kalkulaator;
	}();
});
define('components/kalkulaator/line',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Line = exports.Line = function Line(name, expectedSum, actualSum, type, date) {
		_classCallCheck(this, Line);

		this.name = name;
		this.expectedSum = expectedSum;
		this.actualSum = actualSum;
		this.type = type;
		this.date = date;
	};
});
define('components/login/login',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Login = exports.Login = function Login() {
		_classCallCheck(this, Login);
	};
});
define('components/raport/line',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Line = exports.Line = function Line(name, expectedSum, actualSum, type, date) {
		_classCallCheck(this, Line);

		this.name = name;
		this.expectedSum = expectedSum;
		this.actualSum = actualSum;
		this.type = type;
		this.date = date;
	};
});
define('components/sisse/line',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Line = exports.Line = function Line(name, expectedSum, actualSum, type, date) {
		_classCallCheck(this, Line);

		this.name = name;
		this.expectedSum = expectedSum;
		this.actualSum = actualSum;
		this.type = type;
		this.date = date;
	};
});
define('components/tingimused/tingimused',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Tingimused = exports.Tingimused = function Tingimused() {
    _classCallCheck(this, Tingimused);

    this.header = "Tingimused";
    this.content = " Kasutajana on Sul palju rohkem võimalusi - saad oma kulud salvestada, et saada terviklikum ülevaade, kuhu raha kaob.";
    this.content2 = " Kalkulaatori  kasutamine on imelihtne - sisesta eeldatud ning prognoositav kulu või tulu ning vajuta <Lisa!> ja sinu andmed kuvatakse.";
  };
});
define('components/insert/insert',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Insert = exports.Insert = function Insert() {
    _classCallCheck(this, Insert);
  };
});
define('components/sisse/sisse',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var Sisse = exports.Sisse = function Sisse() {
		_classCallCheck(this, Sisse);
	};
});
define('components/raport/raport',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Raport = exports.Raport = function Raport() {
    _classCallCheck(this, Raport);
  };
});
define('text!styles.css', ['module'], function(module) { module.exports = "/* Avalehega seotud */\r\nbody {\r\n    width: 100%;\r\n    margin: auto;\r\n}\r\n\r\n.content_main {\r\n    margin-top: 200px;\r\n}\r\n.container {\r\n    width: 960px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container_login {\r\n    float: right;\r\n    font-family: \"Helvetica\";\r\n    font-size: 12px;\r\n    padding: 16px;\r\n    color: #fff;\r\n\r\n}\r\n\r\ninput[type=text], input[type=password] {\r\n    width= 100%;\r\n    padding: 6px 10px;\r\n    margin: 4px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n    color: white;\r\n}\r\n\r\n.cancelbtn {\r\n    width: 50%;\r\n    padding: 5px 9px;\r\n    float: right;\r\n    \r\n}\r\n\r\n.align-right{\r\n    float: right;\r\n}\r\n\r\nbutton {\r\n    cursor: pointer;\r\n    width: 50%;\r\n}\r\n.header {\r\n    background: black;\r\n    width: 100%;\r\n    top: 0;\r\n    position: fixed;\r\n}\r\n\r\ninput {\r\n   display: block;\r\n}\r\n\r\n\r\nb{\r\n    color: white;\r\n}\r\n\r\n.logo{\r\n    float: left;\r\n    font-family: \"Helvetica\";\r\n    font-size: 15px;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: white;\r\n}\r\n\r\nli{\r\n    list-style: none;   \r\n    float: left;\r\n    margin-left: 15px;\r\n    padding-top: 15px;\r\n    font-family: \"Helvetica\";\r\n}\r\n\r\n.nav{\r\n    float: right;\r\n}\r\n\r\n/* S��stukalkulaatori jaoks */\r\n\r\n.content_budget{\r\n    margin-top: 80px;\r\n}\r\n\r\n.saastupealkiri {\r\n    font-family: \"Helvetica\";\r\n    font-size: 16px;\r\n}\r\n\r\n.osa2 {\r\n    font-family: \"Helvetica\";\r\n    font-size: 16px;\r\n}"; });
define('text!app.html', ['module'], function(module) { module.exports = "<template><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><require from=\"styles.css\"></require></head><body><div class=\"header\"><div class=\"container\"><div class=\"logo\"><h1><a href=\"#/home\">Rahaplanerija</a></h1></div><div><nav><ul><li repeat.for=\"row of router.navigation\"><a href.bind=\"row.href\">${row.title}</a></li></ul></nav></div></div></div><div><router-view></router-view></div></body></template>"; });
define('text!components/kalkulaator/kalkulaator.css', ['module'], function(module) { module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n    \r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: black;\r\n    color: white;\r\n}"; });
define('text!components/home/home.html', ['module'], function(module) { module.exports = "<template><br><h1>Meist</h1><h2><a href=\"#/login\" style=\"color:green\">Sisse</a></h2><h1>${header}</h1><p>${content}</p><p>${content2}</p></template>"; });
define('text!components/raport/raport.css', ['module'], function(module) { module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n    \r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: black;\r\n    color: white;\r\n}"; });
define('text!components/insert/insert.html', ['module'], function(module) { module.exports = "<template><br><br><br><br><br><form align=\"center\" submit.trigger=\"addToArray()\"><input type=\"text\" value.bind=\"hello\" placeholder=\"Sisesta email \" required><br><input type=\"text\" value.bind=\"email\" placeholder=\"Sisesta parool\" required><br><input type=\"password\" value.bind=\"password\" placeholder=\"Korrage parool\" required><br><input type=\"text\" value.bind=\"nimi\" placeholder=\"Sisesta nimi\" required><br><input type=\"text\" value.bind=\"pernimi\" placeholder=\"Sisesta perekonnanimi\" required><br><input type=\"text\" value.bind=\"adress\" placeholder=\"Sisesta adress\" required><br><input type=\"text\" value.bind=\"telefon\" placeholder=\"Sisesta telefon\" required><br><input type=\"submit\" click.delegate=\"showAlert()\" click.trigger=\"Kustuta()\" value=\"add\"></form><ul><li repeat.for=\"a of array\">${a}</li><br></ul></template>"; });
define('text!components/sisse/sisse.css', ['module'], function(module) { module.exports = "table {\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n}\r\n\r\nth, td {\r\n    text-align: left;\r\n    padding: 8px;\r\n    \r\n}\r\n\r\ntr:nth-child(even){background-color: #f2f2f2}\r\n\r\nth {\r\n    background-color: black;\r\n    color: white;\r\n}"; });
define('text!components/kalkulaator/kalkulaator.html', ['module'], function(module) { module.exports = "<template><require from=\"components/kalkulaator/kalkulaator.css\"></require><style>#input-form input,#input-form select{width:100%}</style><article id=\"main\" class=\"special\"><header><br><br><br><br><h2><a href=\"#/login\" style=\"color:green\">Sisse</a></h2><h2>Eelarve kalkulaator</h2><span class=\"byline\">Kalkulaatori kasutamine on imelihtne - sisesta eeldatud ning prognoositav kulu või tulu ning vajuta \"Lisa!\" ja sinu andmed kuvatakse.</span></header><hr><div class=\"container\"><form class=\"form-inline\" submit.trigger=\"addLine()\" id=\"input-form\"><div class=\"col-xs-3\"><input type=\"text\" class=\"form-control\" id=\"liik\" name=\"liik\" placeholder=\"Sisesta nimi\" value.bind=\"name\"></div><div class=\"col-xs-3\"><input type=\"number\" class=\"form-control\" id=\"summa\" name=\"summa\" placeholder=\"Sisesta eeldatav summa\" value.bind=\"expectedSum\" require></div><div class=\"col-xs-3\"><input type=\"number\" class=\"form-control\" id=\"summa2\" name=\"summa2\" placeholder=\"Sisesta tegelik summa\" value.bind=\"actualSum\" require></div><div class=\"col-xs-2\"><select size=\"1\" class=\"form-control\" id=\"kulutulu\" name=\"kulutulu\" value.bind=\"type\"><option value=\"Kulu\" selected=\"selected\">Kulu</option><option value=\"Tulu\">Tulu</option></select></div><div><input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\" value.bind=\"date\"></div><div class=\"col-xs-1\"><button type=\"submit\" class=\"btn btn-primary\" id=\"lisa-rida\">Lisa!</button><button type=\"button\" click.trigger=\"Kustuta()\">Kustuta andmed!</button></div></form><hr><table class=\"table\"><thead><tr><th></th><th>Kulu</th><th>Tulu</th><th>Jääk</th></tr></thead><tbody><tr><td>Prognoositud</td><td textcontent.bind=\"expected.outcome\"></td><td textcontent.bind=\"expected.income\"></td><td textcontent.bind=\"expected.remainder\"></td></tr><td>Tegelik</td><td textcontent.bind=\"actual.outcome\"></td><td textcontent.bind=\"actual.income\"></td><td textcontent.bind=\"actual.remainder\"></td></tbody></table><table class=\"table\"><thead><tr><th>Nimetus</th><th>Sisesta eeldatav summa</th><th>Sisesta tegelik summa</th><th>Kulu või tulu</th><th>Kuupaev</th><th>Kustuta</th><th></th></tr></thead><tbody id=\"table-body\"><tr repeat.for=\"line of lines\"><td>${line.name}</td><td>${line.expectedSum}</td><td>${line.actualSum}</td><td>${line.type}</td><td>${line.date}</td><td><button type=\"button\" class=\"btn btn-danger\" click.trigger=\"removeLine(line)\">Kustuta</button></td></tr></tbody></table></div></article></template>"; });
define('text!components/login/login.html', ['module'], function(module) { module.exports = "<template><div if.bind=\"!register\"><div class=\"wrapper style1\"><div class=\"container\"><div class=\"row\"><article id=\"main\" class=\"special\"><header><h2>Logi sisse</h2><span class=\"byline\">Kasutajana on Sul palju rohkem võimalusi - saad oma kulud salvestada, et saada terviklikum ülevaade, kuhu raha kaob.</span></header></article></div></div></div><hr><form class=\"form-horizontal\"><div class=\"form-group\"><label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Sisestage meiliaadress\" value.bind=\"userData.email\"></div></div><div class=\"form-group\"><label for=\"inputPassword3\" class=\"col-sm-2 control-label\">Parool</label><div class=\"col-sm-10\"><input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Sisestage parool\" value.bind=\"userData.password\"></div></div><div class=\"form-group\"><div class=\"col-sm-offset-2 col-sm-10\"><div class=\"checkbox\"><label><input type=\"checkbox\">Jäta mind meelde</label></div></div></div><div class=\"form-group\"><div class=\"col-sm-offset-2 col-sm-10\"><button type=\"submit\" class=\"btn btn-default\" click.delegate=\"loginUser()\">Logi sisse</button> <button type=\"button\" class=\"btn btn-default\" click.trigger=\"toggleRegister()\">Registreeri</button></div></div></form></div><div if.bind=\"register\"><div class=\"container\"><div class=\"row main\"><div class=\"panel-heading\"><div class=\"panel-title text-center\"><h1 class=\"title\">Registreeru Rahaplaneerija kasutajaks</h1><hr></div></div><div if.bind=\"error\">Viga!</div><div class=\"main-login main-center\"><form class=\"form-horizontal\" submit.delegate=\"addUser()\"><div class=\"form-group\"><label for=\"name\" class=\"cols-sm-2 control-label\">Sinu nimi</label><div class=\"cols-sm-10\"><div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span> <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Sisestage nimi\" value.bind=\"userData.name\"></div></div></div><div class=\"form-group\"><label for=\"email\" class=\"cols-sm-2 control-label\">Sinu meiliaadress</label><div class=\"cols-sm-10\"><div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span> <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" value.bind=\"userData.email\" placeholder=\"Sisestage meiliaadress\"></div></div></div><div class=\"form-group\"><label for=\"username\" class=\"cols-sm-2 control-label\">Kasutajanimi</label><div class=\"cols-sm-10\"><div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span> <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Sisestage kasutajanimi\" value.bind=\"userData.username\"></div></div></div><div class=\"form-group\"><label for=\"password\" class=\"cols-sm-2 control-label\">Parool</label><div class=\"cols-sm-10\"><div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span> <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Sisestage parool\" value.bind=\"userData.password\"></div></div></div><div class=\"form-group\"><label for=\"confirm\" class=\"cols-sm-2 control-label\">Korrake parooli</label><div class=\"cols-sm-10\"><div class=\"input-group\"><span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span> <input type=\"password\" class=\"form-control\" name=\"confirm\" id=\"confirm\" placeholder=\"Korrake parooli\" value.bind=\"userData.password2\"></div></div></div><div class=\"form-group\"><button type=\"submit\" class=\"btn btn-primary btn-lg btn-block login-button\">Registreeru</button></div></form></div></div></div></div><div><p><ul><li repeat.for=\"user of userList\">${user.email}</li></ul></p></div></template>"; });
define('text!components/newpass/newpass.html', ['module'], function(module) { module.exports = "<template><h1>NewPass</h1><h1>NewPass</h1><h1>${header}</h1><br><br><form role=\"form\" submit.delegate=\"newpass()\"><input id=\"uuspsw\" type=\"text\" name=\"uuspsw\" value.bind=\"userData.email\" placeholder=\"Sisesta email\" onblur=\"NewPass()\"><div><p id=\"uspsw\"></p><h3>${uuspsw}</h3><input type=\"submit\" value=\"Parooli tellimine\"></div></form></template>"; });
define('text!components/raport/raport.html', ['module'], function(module) { module.exports = "<template><require from=\"components/sisse/sisse.css\"></require><style>#input-form input,#input-form select{width:100%}</style><article id=\"main\" class=\"special\"><header><br><br><br><br><h2><a href=\"#/home\" style=\"color:green\">Välja</a></h2><h2><a href=\"#/sisse\" style=\"color:#000\">Kalkulaator</a></h2></header><hr><div class=\"container\"><h2>Võtta raporti</h2><form class=\"form-inline\" submit.trigger=\"addLineFrom()\" id=\"input-form\"></form></div><div>Alg. kuupäev<input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\" value.bind=\"userData.date\">Lõpp. kuupäev<input type=\"date\" class=\"form-control\" id=\"date2\" name=\"date2\" value.bind=\"userData.date2\"></div><div class=\"col-xs-1\"><button type=\"submit\" class=\"btn btn-primary\" id=\"lisa-rida\">Vötta andmed baasist!</button><button type=\"button\" click.trigger=\"Kustuta()\">Kustuta kõik andmed!</button></div><hr><table class=\"table\"><thead><tr><th></th><th>Kulu</th><th>Tulu</th><th>Jääk</th></tr></thead><tbody><tr><td>Prognoositud</td><td textcontent.bind=\"expected.outcome\"></td><td textcontent.bind=\"expected.income\"></td><td textcontent.bind=\"expected.remainder\"></td></tr><td>Tegelik</td><td textcontent.bind=\"actual.outcome\"></td><td textcontent.bind=\"actual.income\"></td><td textcontent.bind=\"actual.remainder\"></td></tbody></table><table class=\"table\"><thead><tr><th>Nimetus</th><th>Sisesta eeldatav summa</th><th>Sisesta tegelik summa</th><th>Kulu või tulu</th><th>Kuupaev</th><th>Kustuta</th><th></th></tr></thead><tbody id=\"table-body\"><tr repeat.for=\"line of lines\"><td>${line.name}</td><td>${line.expectedSum}</td><td>${line.actualSum}</td><td>${line.type}</td><td>${line.date}</td><td><button type=\"button\" class=\"btn btn-danger\" click.trigger=\"removeLine(line)\">Kustuta</button></td></tr></tbody></table></article></template>"; });
define('text!components/reg/reg.html', ['module'], function(module) { module.exports = "<template><h1>${header}</h1><br><br><br><br><h1>${header}</h1><article id=\"main\" class=\"special\" align=\"center\"><fieldset><form role=\"form\" class=\"form-inline\" submit.delegate=\"addUser()\"><div><input type=\"text\" name=\"uemail\" value.bind=\"userData.email\" placeholder=\"Sisesta email\" required></div><div><p id=\"uem\"></p></div><div><input type=\"password\" name=\"userpassword_1\" value.bind=\"userData.userpassword_1\" placeholder=\"Sisesta parool\" required></div><div><p id=\"upsw\"></p></div><div><input type=\"password\" name=\"userpassword_2\" value.bind=\"userData.userpassword_2\" placeholder=\"Korrage parool\" required></div><div><p id=\"upsw2\"></p></div><div><input type=\"text\" name=\"usernimi\" value.bind=\"userData.usernimi\" placeholder=\"Sisesta nimi\" required></div><div><p id=\"umi\"></p></div><div><input type=\"text\" name=\"userperekonnanimi\" value.bind=\"userData.userperekonnanimi\" placeholder=\"Sisesta perekonnanimi\" required></div><div><p id=\"upn\"></p></div><div><input type=\"text\" name=\"useradress\" value.bind=\"userData.useradress\" placeholder=\"Sissestage adress\" required></div><div><p id=\"adr\"></p></div><div><input type=\"text\" name=\"usertelefon\" value.bind=\"userData.usertelefon\" placeholder=\"Sisesta telefoni number (372)\" required></div><div><p id=\"ut\"></p></div><div></div><div><input type=\"submit\" value=\"Registreeri\"></div></form></fieldset></article></template>"; });
define('text!components/sisse/sisse.html', ['module'], function(module) { module.exports = "<template><require from=\"components/sisse/sisse.css\"></require><style>#input-form input,#input-form select{width:100%}</style><article id=\"main\" class=\"special\"><header><br><br><br><br><h2><a href=\"#/home\" style=\"color:green\">Välja</a></h2></header><h1><a href=\"#/raport\" style=\"color:#000\">Võtta raport siin</a></h1><hr><div class=\"container\"><form class=\"form-inline\" submit.trigger=\"addLine()\" id=\"input-form\"><div class=\"col-xs-3\"><input type=\"text\" class=\"form-control\" id=\"liik\" name=\"liik\" placeholder=\"Sisesta nimi\" value.bind=\"userData.name\"></div><div class=\"col-xs-3\"><input type=\"number\" class=\"form-control\" id=\"summa\" name=\"summa\" placeholder=\"Sisesta eeldatav summa\" value.bind=\"userData.expectedSum\"></div><div class=\"col-xs-3\"><input type=\"number\" class=\"form-control\" id=\"summa2\" name=\"summa2\" placeholder=\"Sisesta tegelik summa\" value.bind=\"userData.actualSum\"></div><div class=\"col-xs-2\"><select size=\"1\" class=\"form-control\" id=\"kulutulu\" name=\"kulutulu\" value.bind=\"userData.type\"><option value=\"Kulu\" selected=\"selected\">Kulu</option><option value=\"Tulu\">Tulu</option></select></div><div><input type=\"date\" class=\"form-control\" id=\"date\" name=\"date\" value.bind=\"userData.date\"></div><div class=\"col-xs-1\"><button type=\"submit\" class=\"btn btn-primary\" id=\"lisa-rida\">Lisa!</button><button type=\"button\" click.trigger=\"Kustuta()\">Kustuta kõik andmed!</button></div></form><hr><table class=\"table\"><thead><tr><th></th><th>Kulu</th><th>Tulu</th><th>Jääk</th></tr></thead><tbody><tr><td>Prognoositud</td><td textcontent.bind=\"expected.outcome\"></td><td textcontent.bind=\"expected.income\"></td><td textcontent.bind=\"expected.remainder\"></td></tr><td>Tegelik</td><td textcontent.bind=\"actual.outcome\"></td><td textcontent.bind=\"actual.income\"></td><td textcontent.bind=\"actual.remainder\"></td></tbody></table><table class=\"table\"><thead><tr><th>Nimetus</th><th>Sisesta eeldatav summa</th><th>Sisesta tegelik summa</th><th>Kulu või tulu</th><th>Kuupaev</th><th>Kustuta</th><th></th></tr></thead><tbody id=\"table-body\"><tr repeat.for=\"line of lines\"><td>${line.name}</td><td>${line.expectedSum}</td><td>${line.actualSum}</td><td>${line.type}</td><td>${line.date}</td><td><button type=\"button\" class=\"btn btn-danger\" click.trigger=\"removeLine(line)\">Kustuta</button></td></tr></tbody></table></div></article></template>"; });
define('text!components/tingimused/tingimused.html', ['module'], function(module) { module.exports = "<template><br><br><br><br><br><h2><a href=\"#/login\" style=\"color:green\">Sisse</a></h2><h1>${header}</h1><p>${content}</p><p>${content2}</p></template>"; });
//# sourceMappingURL=app-bundle.js.map