"use strict";
var appModule_1 = require("../js/appModule");
var SystemManage = (function () {
    function SystemManage() {
        this.currentId = -1;
        this.targetId = -1;
    }
    SystemManage.prototype.resetTargetId = function () {
        this.targetId = -1;
    };
    SystemManage.prototype.setCurrentId = function (id) {
        console.log(id);
        this.currentId = id;
    };
    SystemManage.prototype.setTargetId = function (id) {
        this.targetId = id;
    };
    return SystemManage;
}());
exports.SystemManage = SystemManage;
appModule_1.appModule.service("systemManage", SystemManage);
//# sourceMappingURL=systemManage.js.map