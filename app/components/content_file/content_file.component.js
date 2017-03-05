"use strict";
var appModule_1 = require('../../js/appModule');
var ContentFile = (function () {
    function ContentFile() {
    }
    ContentFile.prototype.handleClick = function (event, id) {
        switch (event.which) {
            case 1:
                this.sys.setCurrentId(id);
                break;
            case 3:
                this.sys.toggleContextMenu(event.x + 5, event.y + 5);
                break;
        }
    };
    return ContentFile;
}());
exports.ContentFile = ContentFile;
appModule_1.appModule.component('contentFile', {
    controller: ContentFile,
    templateUrl: "app/components/content_file/content_file.component.html",
    bindings: {
        fs: "<",
        dir: "<",
        sys: "<",
    }
});
//# sourceMappingURL=content_file.component.js.map