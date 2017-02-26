"use strict";
var appModule_1 = require('../../js/appModule');
var Content = (function () {
    function Content() {
        this.currentId = 200;
    }
    Content.prototype.debug = function () {
        console.log(this.currentId);
    };
    return Content;
}());
exports.Content = Content;
appModule_1.appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
    bindings: {
        currentId: "<"
    }
});
//# sourceMappingURL=content.component.js.map