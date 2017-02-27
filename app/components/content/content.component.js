"use strict";
var appModule_1 = require('../../js/appModule');
var Content = (function () {
    function Content() {
        this.id = 200;
    }
    Content.prototype.debug = function () {
        console.log(this.id);
    };
    return Content;
}());
exports.Content = Content;
appModule_1.appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
    bindings: {
        id: "<"
    }
});
//# sourceMappingURL=content.component.js.map