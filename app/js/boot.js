"use strict";
var angular = require("angular");
var appModule_1 = require('./appModule');
var user_interface_component_1 = require('../components/user_interface/user_interface.component');
var top_bar_component_1 = require("../components/top_bar/top_bar.component");
var browser_component_1 = require("../components/browser/browser.component");
var content_component_1 = require("../components/content/content.component");
appModule_1.appModule;
user_interface_component_1.UserInterface;
top_bar_component_1.TopBar;
browser_component_1.Browser;
content_component_1.Content;
angular.bootstrap(document.getElementById('html'), ['web-file-browser']);
//# sourceMappingURL=boot.js.map