"use strict";
var File = (function () {
    function File(id, name, parentId) {
        this.id = id;
        this.name = name;
        this.parentId = parentId;
    }
    File.prototype.rename = function (newName) {
        this.name = name;
    };
    return File;
}());
exports.File = File;
//# sourceMappingURL=file.js.map