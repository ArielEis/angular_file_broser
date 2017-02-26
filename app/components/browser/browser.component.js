"use strict";
var appModule_1 = require('../../js/appModule');
var Browser = (function () {
    function Browser() {
    }
    return Browser;
}());
exports.Browser = Browser;
appModule_1.appModule.component('browser', {
    controller: Browser,
    templateUrl: "app/components/browser/browser.component.html",
    bindings: {
        currentId: "<",
    }
});
//# sourceMappingURL=browser.component.js.map