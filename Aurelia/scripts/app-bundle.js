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
define('kalkulaator',['exports', './line'], function (exports, _line) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Kalkulaator = undefined;
	class Kalkulaator {
		constructor() {
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

		initFields() {
			this.name = '';
			this.expectedSum = '';
			this.actualSum = '';
			this.type = 'Kulu';
		}

		addLine() {
			const line = new _line.Line(this.name, parseFloat(this.expectedSum), parseFloat(this.actualSum), this.type);
			this.lines.push(line);
			this.initFields();
			this.calculate(line);
		}

		removeLine(line) {
			const index = this.lines.indexOf(line);
			if (index !== -1) {
				this.lines.splice(index, 1);
				line.expectedSum = -line.expectedSum;
				line.actualSum = -line.actualSum;
				this.calculate(line);
			}
		}

		calculate(line) {
			if (line.type === 'Kulu') {
				this.expected.outcome += line.expectedSum;
				this.actual.outcome += line.actualSum;
			} else {
				this.expected.income += line.expectedSum;
				this.actual.income += line.actualSum;
			}
			this.expected.remainder = this.expected.income - this.expected.outcome;
			this.actual.remainder = this.actual.income - this.actual.outcome;
		}
	}
	exports.Kalkulaator = Kalkulaator;
});
define('line',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	class Line {
		constructor(name, expectedSum, actualSum, type) {
			this.name = name;
			this.expectedSum = expectedSum;
			this.actualSum = actualSum;
			this.type = type;
		}
	}
	exports.Line = Line;
});
define('main',['exports', './environment', './authConfig'], function (exports, _environment, _authConfig) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  var _authConfig2 = _interopRequireDefault(_authConfig);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  //Configure Bluebird Promises.
  Promise.config({
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources').plugin('aurelia-auth', baseConfig => {
      baseConfig.configure(_authConfig2.default);
    });

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(() => aurelia.setRoot());
  }
});
define('root',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	class Root {}
	exports.Root = Root;
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {
    //config.globalResources([]);
  }
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <nav class=\"navbar navbar-default\">\n    <ul class=\"nav navbar-nav\">\n      <li class=\"${row.active ? 'active' : ''}\" repeat.for=\"row of router.navigation\">\n        <a href.bind=\"row.href\">${row.title}</a>\n      </li>\n    </ul>\n  </nav>\n   <div class=\"container\">\n   <router-view></router-view>\n   \t</div>\n    <hr />\n   \t<footer>\n   \t<div class=\"copyright\">\n\t    <p>&copy; Rahaplaneerija 2017. All rights reserved.</p>\n\t</div>\n   \t</footer>\n</template>\n"; });
define('text!css/root.css', ['module'], function(module) { module.exports = "h1, h2, h3 {\n\ttext-align: center;\n}\n\n"; });
define('text!kalkulaator.html', ['module'], function(module) { module.exports = "<template>\r\n  <style>\r\n    #input-form input,\r\n    #input-form select {\r\n      width: 100%;\r\n    }\r\n  </style>\r\n  <article id=\"main\" class=\"special\">\r\n    <header>\r\n      <h2>Eelarve kalkulaator</h2>\r\n      <span class=\"byline\"> Kalkulaatori kasutamine on imelihtne - sisesta eeldatud ning prognoositav kulu või tulu ning vajuta \"Lisa!\" ja sinu andmed kuvatakse.</span> \r\n    </header>\r\n    <hr/>\r\n    <div class=\"container\">\r\n      <form class=\"form-inline\" submit.trigger=\"addLine()\" id=\"input-form\">\r\n          <div class=\"col-xs-3\">\r\n            <input type=\"text\" class=\"form-control\" id=\"liik\" name=\"liik\" placeholder=\"Sisesta nimi\" value.bind=\"name\">\r\n          </div>\r\n          <div class=\"col-xs-3\">\r\n           <input type=\"number\" class=\"form-control\" id=\"summa\" name=\"summa\" placeholder=\"Sisesta eeldatav summa\" value.bind=\"expectedSum\">\r\n          </div>\r\n          <div class=\"col-xs-3\">\r\n            <input type=\"number\" class=\"form-control\" id=\"summa2\" name=\"summa2\" placeholder=\"Sisesta tegelik summa\" value.bind=\"actualSum\">\r\n          </div>  \r\n          <div class=\"col-xs-2\">\r\n            <select size=\"1\" class=\"form-control\" id=\"kulutulu\" name=\"kulutulu\" value.bind=\"type\">\r\n              <option value=\"Kulu\" selected=\"selected\">\r\n                Kulu\r\n              </option>\r\n              <option value=\"Tulu\">\r\n                Tulu\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-xs-1\">\r\n          <button type=\"submit\" class=\"btn btn-primary\" id=\"lisa-rida\">Lisa!</button>\r\n         </div>\r\n       </form>\r\n       <hr>\r\n       <table class=\"table\">\r\n         <thead>\r\n           <tr>\r\n             <th></th>\r\n             <th>Kulu</th>\r\n             <th>Tulu</th>\r\n             <th>Jääk</th>\r\n           </tr>\r\n         </thead>\r\n         <tbody>\r\n            <tr>\r\n              <td>Prognoositud</td>\r\n              <td textcontent.bind=\"expected.outcome\"></td>\r\n              <td textcontent.bind=\"expected.income\"></td>\r\n              <td textcontent.bind=\"expected.remainder\"></td>\r\n            </tr >\r\n              <td>Tegelik</td>\r\n              <td textcontent.bind=\"actual.outcome\"></td>\r\n              <td textcontent.bind=\"actual.income\"></td>\r\n              <td textcontent.bind=\"actual.remainder\"></td>\r\n            </tr>\r\n         </tbody>\r\n       </table> \r\n      <table class=\"table\">\r\n          <thead>\r\n            <tr>\r\n                <th>Nimetus</th>\r\n                <th>Sisesta eeldatav summa</th>\r\n                <th>Sisesta tegelik summa</th>\r\n                <th>Kulu või tulu</th>\r\n                <th></th>\r\n            </tr>\r\n          </thead>\r\n          <tbody id=\"table-body\">\r\n            <tr repeat.for=\"line of lines\">\r\n              <td>${line.name}</td>\r\n              <td>${line.expectedSum}</td>\r\n              <td>${line.actualSum}</td>\r\n              <td>${line.type}</td>\r\n              <td><button type=\"button\" class=\"btn btn-danger\" click.trigger=\"removeLine(line)\">Kustuta</button></td>\r\n            </tr>\r\n          </tbody>\r\n      </table>\r\n    </div>\r\n  </article>\r\n</template>"; });
define('text!login.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n\r\n\t<div if.bind=\"!register\">\r\n\t\t<div class=\"wrapper style1\">\r\n\t\t  <div class=\"container\">\r\n\t\t    <div class=\"row\">\r\n\t\t        <article id=\"main\" class=\"special\">\r\n\t\t          <header>\r\n\t\t            <h2>Logi sisse</h2>\r\n\t\t            <span class=\"byline\"> Kasutajana on Sul palju rohkem võimalusi - saad oma kulud salvestada, et saada terviklikum ülevaade, kuhu raha kaob. </span> </header>\r\n\t\t          </article>  \r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t</div>\r\n\t\t<hr/>\r\n\r\n\t\t<form class=\"form-horizontal\">\r\n\t\t  <div class=\"form-group\">\r\n\t\t    <label for=\"inputEmail3\" class=\"col-sm-2 control-label\">Email</label>\r\n\t\t    <div class=\"col-sm-10\">\r\n\t\t      <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Sisestage meiliaadress\" value.bind=\"userData.email\">\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"form-group\">\r\n\t\t    <label for=\"inputPassword3\" class=\"col-sm-2 control-label\" >Parool</label>\r\n\t\t    <div class=\"col-sm-10\">\r\n\t\t      <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Sisestage parool\" value.bind=\"userData.password\">\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"form-group\">\r\n\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t      <div class=\"checkbox\">\r\n\t\t        <label>\r\n\t\t          <input type=\"checkbox\">Jäta mind meelde\r\n\t\t        </label>\r\n\t\t      </div>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t  <div class=\"form-group\">\r\n\t\t    <div class=\"col-sm-offset-2 col-sm-10\">\r\n\t\t      <button type=\"submit\" class=\"btn btn-default\" click.delegate=\"loginUser()\">Logi sisse</button>\r\n\t\t      <button type=\"button\" class=\"btn btn-default\" click.trigger=\"toggleRegister()\">Registreeri</button>\r\n\t\t    </div>\r\n\t\t  </div>\r\n\t\t</form>\r\n\t</div>\r\n\r\n\t<div if.bind=\"register\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row main\">\r\n\t\t\t\t<div class=\"panel-heading\">\r\n\t\t            <div class=\"panel-title text-center\">\r\n\t\t            \t<h1 class=\"title\">Registreeru Rahaplaneerija kasutajaks</h1>\r\n\t\t               \t\t<hr />\r\n\t\t            </div>\r\n\t\t        </div> \r\n\r\n\t\t<div if.bind=\"error\">Viga!</div>\r\n\r\n\t\t<div class=\"main-login main-center\">\r\n\t\t\t<form class=\"form-horizontal\" submit.delegate=\"addUser()\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"name\" class=\"cols-sm-2 control-label\">Sinu nimi</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" placeholder=\"Sisestage nimi\" value.bind=\"userData.name\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"email\" class=\"cols-sm-2 control-label\">Sinu meiliaadress</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" value.bind=\"userData.email\" placeholder=\"Sisestage meiliaadress\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"username\" class=\"cols-sm-2 control-label\">Kasutajanimi</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" placeholder=\"Sisestage kasutajanimi\" value.bind=\"userData.username\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"password\" class=\"cols-sm-2 control-label\">Parool</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" placeholder=\"Sisestage parool\" value.bind=\"userData.password\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<label for=\"confirm\" class=\"cols-sm-2 control-label\">Korrake parooli</label>\r\n\t\t\t\t\t<div class=\"cols-sm-10\">\r\n\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t<span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"confirm\" id=\"confirm\" placeholder=\"Korrake parooli\" value.bind=\"userData.password2\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group \">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block login-button\">Registreeru</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n\t</div>\r\n\t</div>\r\n</template>"; });
define('text!root.html', ['module'], function(module) { module.exports = "<template>\n\t<require from=\"css/root.css\"></require>\n\n  \t<h1>Tere! Oled Rahaplaneerija kodulehel!</h1>\n\n    <h2>Eelarve kalkulaator aitab sul hoida selget ülevaadet oma kulutustest ja tuludest!</h2>\n\n    <h3>Kõige parema kasutajakogemuse saamiseks logi sisse!</h3>\n\n</template>"; });
//# sourceMappingURL=app-bundle.js.map