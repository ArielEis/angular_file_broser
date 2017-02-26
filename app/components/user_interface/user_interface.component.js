"use strict";
var appModule_1 = require('../../js/appModule');
var UserInterface = (function () {
    function UserInterface() {
        this.currentId = 0;
    }
    return UserInterface;
}());
exports.UserInterface = UserInterface;
appModule_1.appModule.component('userInterface', {
    controller: UserInterface,
    templateUrl: "app/components/user_interface/user_interface.component.html",
});
//# sourceMappingURL=user_interface.component.js.map