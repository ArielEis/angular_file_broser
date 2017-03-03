"use strict";
var appModule_1 = require('../../js/appModule');
var Tree = (function () {
    function Tree() {
    }
    return Tree;
}());
exports.Tree = Tree;
appModule_1.appModule.component('tree', {
    controller: Tree,
    templateUrl: "app/components/tree/tree.component.html",
    bindings: {
        root: "<",
        setshow: "<",
    }
});
//# sourceMappingURL=tree.component.js.map