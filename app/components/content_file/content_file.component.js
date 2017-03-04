"use strict";
var appModule_1 = require('../../js/appModule');
var ContentFile = (function () {
    function ContentFile() {
    }
    return ContentFile;
}());
exports.ContentFile = ContentFile;
appModule_1.appModule.component('contentFile', {
    controller: ContentFile,
    templateUrl: "app/components/content_file/content_file.component.html",
    bindings: {
        fs: "<",
        dir: "<",
    }
});
//# sourceMappingURL=content_file.component.js.map