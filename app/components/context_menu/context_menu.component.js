"use strict";
var appModule_1 = require("../../js/appModule");
var ContextMenu = (function () {
    function ContextMenu() {
    }
    return ContextMenu;
}());
exports.ContextMenu = ContextMenu;
appModule_1.appModule.component('contextMenu', {
    controller: ContextMenu,
    templateUrl: "app/components/context_menu/context_menu.component.html",
    bindings: {
        sys: "<",
    }
});
//# sourceMappingURL=context_menu.component.js.map