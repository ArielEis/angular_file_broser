"use strict";
var appModule_1 = require('../../js/appModule');
var BrowserDirectory = (function () {
    function BrowserDirectory() {
        this._isDirectoryOpen = false;
        this._imageSrc = 'browser-directory-close';
    }
    BrowserDirectory.prototype.syncDirectoryImage = function () {
        if (this._isDirectoryOpen) {
            this._imageSrc = 'browser-directory-open';
        }
        this._imageSrc = 'browser-directory-close';
    };
    BrowserDirectory.prototype.handleDirectoryImageClick = function () {
        this._isDirectoryOpen = !this._isDirectoryOpen;
        this.syncDirectoryImage();
    };
    BrowserDirectory.prototype.handleClick = function (event, id) {
        switch (event.which) {
            case 1:
                this.sys.setCurrentId(id);
                break;
            case 3:
                this.sys.toggleContextMenu(event.x + 5, event.y + 5);
                break;
        }
    };
    return BrowserDirectory;
}());
exports.BrowserDirectory = BrowserDirectory;
appModule_1.appModule.component('browserDirectory', {
    controller: BrowserDirectory,
    templateUrl: "app/components/browser_directory/browser_directory.component.html",
    bindings: {
        directory: "=",
        fs: "=",
        sys: "=",
    }
});
//# sourceMappingURL=browser_directory.component.js.map