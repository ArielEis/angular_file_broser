"use strict";
var angular = require("angular");
var appModule_1 = require('./appModule');
var user_interface_component_1 = require('../components/user_interface/user_interface.component');
var top_bar_component_1 = require("../components/top_bar/top_bar.component");
var browser_component_1 = require("../components/browser/browser.component");
var content_component_1 = require("../components/content/content.component");
var tree_component_1 = require("../components/tree/tree.component");
var browser_directory_component_1 = require("../components/browser_directory/browser_directory.component");
var content_file_component_1 = require("../components/content_file/content_file.component");
var history_component_1 = require("../components/history/history.component");
var address_component_1 = require("../components/address/address.component");
var fileSystem_1 = require("../services/fileSystem");
var systemManage_1 = require("../services/systemManage");
appModule_1.appModule;
//services
fileSystem_1.FileSystem;
systemManage_1.SystemManage;
//components
user_interface_component_1.UserInterface;
top_bar_component_1.TopBar;
browser_component_1.Browser;
content_component_1.Content;
tree_component_1.Tree;
browser_directory_component_1.BrowserDirectory;
content_file_component_1.ContentFile;
history_component_1.History;
address_component_1.Address;
angular.bootstrap(document.getElementById('html'), ['web-file-browser']);
//# sourceMappingURL=boot.js.map