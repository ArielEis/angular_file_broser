"use strict";
var appModule_1 = require("../js/appModule");
var SystemManage = (function () {
    function SystemManage() {
        this.currentId = -1;
        this.targetId = -1;
        this.contextMenu = false;
        this.contextMenuXposition = 0;
        this.contextMenuYposition = 0;
        this.showContent = false;
    }
    SystemManage.prototype.resetTargetId = function () {
        this.targetId = -1;
    };
    SystemManage.prototype.setCurrentId = function (id) {
        this.showContent = false;
        if (this.currentId === id) {
            this.currentId = -1;
            return;
        }
        console.log(id);
        this.currentId = id;
        this.showContent = true;
    };
    SystemManage.prototype.setTargetId = function (id) {
        this.targetId = id;
    };
    SystemManage.prototype.getCurrentId = function () {
        return this.currentId;
    };
    SystemManage.prototype.toggleContextMenu = function (x, y) {
        this.contextMenuXposition = x;
        this.contextMenuYposition = y;
        this.contextMenu = !this.contextMenu;
    };
    SystemManage.prototype.closeContextMenu = function () {
        this.contextMenu = false;
    };
    SystemManage.prototype.getY = function () {
        return this.contextMenuYposition + 'px';
    };
    SystemManage.prototype.getX = function () {
        return this.contextMenuXposition + 'px';
    };
    return SystemManage;
}());
exports.SystemManage = SystemManage;
appModule_1.appModule.service("systemManage", SystemManage);
//# sourceMappingURL=systemManage.js.map