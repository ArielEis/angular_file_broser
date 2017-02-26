"use strict";
var appModule_1 = require("../js/appModule");
appModule_1.appModule.service("fileSystem", function () {
    var FileSystem = (function () {
        function FileSystem() {
            this._root = {
                id: 0,
                name: 'ROOT',
                parent: -1,
                type: 'directory'
            };
        }
        return FileSystem;
    }());
    this._fileSystem = new FileSystem();
});
//# sourceMappingURL=fileSystem.js.map