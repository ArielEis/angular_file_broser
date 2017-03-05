"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var File_1 = require("./File");
var TextFile = (function (_super) {
    __extends(TextFile, _super);
    function TextFile(id, name, parentId, content) {
        _super.call(this, id, name, parentId);
        this.content = content;
    }
    TextFile.prototype.setContent = function (newContent) {
        this.content = newContent;
    };
    TextFile.prototype.getType = function () {
        return 'text';
    };
    return TextFile;
}(File_1.File));
exports.TextFile = TextFile;
//# sourceMappingURL=textFile.js.map