"use strict";
var appModule_1 = require('../../js/appModule');
var BrowserDirectory = (function () {
    function BrowserDirectory() {
        this._isDirectoryOpen = false;
    }
    BrowserDirectory.prototype.syncDirectoryImage = function () {
        if (this._isDirectoryOpen) {
            return 'pic/open_directory.png';
        }
        return 'pic/close_directory.png';
    };
    BrowserDirectory.prototype.handleDirectoryImageClick = function () {
        this._isDirectoryOpen = !this._isDirectoryOpen;
    };
    return BrowserDirectory;
}());
exports.BrowserDirectory = BrowserDirectory;
appModule_1.appModule.component('browserDirectory', {
    controller: BrowserDirectory,
    templateUrl: "app/components/browser_directory/browser_directory.component.html",
    bindings: {
        directory: "<",
        setshow: "=",
    }
});
//# sourceMappingURL=browser_directory.component.js.map