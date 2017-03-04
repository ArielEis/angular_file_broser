"use strict";
var appModule_1 = require('../../js/appModule');
var UserInterface = (function () {
    function UserInterface(fileSystem, systemManage) {
        this.fileSystem = fileSystem;
        this.systemManage = systemManage;
    }
    Object.defineProperty(UserInterface.prototype, "root", {
        get: function () {
            return this.fileSystem.root;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInterface.prototype, "id", {
        get: function () {
            return this.systemManage.getCurrentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInterface.prototype, "setCurrentId", {
        get: function () {
            return this.systemManage.setCurrentId;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserInterface.prototype, "setTargetId", {
        get: function () {
            return this.systemManage.setTargetId;
        },
        enumerable: true,
        configurable: true
    });
    return UserInterface;
}());
exports.UserInterface = UserInterface;
appModule_1.appModule.component('userInterface', {
    controller: UserInterface,
    templateUrl: "app/components/user_interface/user_interface.component.html",
});
//# sourceMappingURL=user_interface.component.js.map