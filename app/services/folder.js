"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var File_1 = require("./File");
var Folder = (function (_super) {
    __extends(Folder, _super);
    function Folder(id, name, parentId) {
        _super.call(this, id, name, parentId);
        this.items = [];
    }
    Folder.prototype.getType = function () {
        return 'directory';
    };
    Folder.prototype.addChild = function (item) {
        if (!(item instanceof File_1.File)) {
            return;
        }
        this.items.push(item);
    };
    Folder.prototype.findChild = function (id) {
        if (typeof id !== 'number') {
            return undefined;
        }
        var file = undefined;
        var itemsToRunOfThem = this.items.length;
        while (itemsToRunOfThem--) {
            file = this.items[itemsToRunOfThem];
            if (file.id === id) {
                return file;
            }
        }
        return undefined;
    };
    Folder.prototype.deleteChild = function (id) {
        if (typeof id !== 'number') {
            return undefined;
        }
        var itemsToRunOfThem = this.items.length;
        while (itemsToRunOfThem--) {
            if (this.items[itemsToRunOfThem].id === id) {
                this.items.splice(itemsToRunOfThem, 1);
                break;
            }
        }
    };
    Folder.prototype.getChildren = function () {
        return this.items;
    };
    return Folder;
}(File_1.File));
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map