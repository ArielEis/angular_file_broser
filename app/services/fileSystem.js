"use strict";
var file_1 = require("./file");
var folder_1 = require("./folder");
var textFile_1 = require("./textFile");
var appModule_1 = require("../js/appModule");
var FileSystem = (function () {
    function FileSystem() {
        this.root = new folder_1.Folder(0, 'Root', -1);
        this.nextId = 1;
        this.addFolder('sub1', 0);
        this.addFolder('sub2', 0);
        this.addFolder('sub3', 1);
        this.addFolder('sub4', 2);
        this.addFile('text1', 0, '');
        this.addFile('text2', 1, '');
    }
    FileSystem.prototype.addFolder = function (name, parentId) {
        var folder = this.getFolderById(this.root, parentId);
        if (!(folder instanceof folder_1.Folder)) {
            return;
        }
        folder.addChild(new folder_1.Folder(this.nextId++, name, parentId));
    };
    FileSystem.prototype.addFile = function (name, parentId, content) {
        var folder = this.getFolderById(this.root, parentId);
        if (!(folder instanceof folder_1.Folder)) {
            return;
        }
        folder.addChild(new textFile_1.TextFile(this.nextId++, name, parentId, content));
    };
    FileSystem.prototype.renameItem = function (id, newName) {
        var file = this.getItem(id);
        if (!(file instanceof file_1.File)) {
            return;
        }
        file.rename(newName);
    };
    FileSystem.prototype.deleteItem = function (id) {
        var folder = this.getParentById(this.root, id);
        if (!(folder instanceof folder_1.Folder)) {
            return;
        }
        folder.deleteChild(id);
    };
    FileSystem.prototype.getItem = function (uniqueIdentify) {
        switch (typeof uniqueIdentify) {
            case 'number':
                return this.getFileById(this.root, uniqueIdentify);
            case 'string':
                return this.getFileByPath(this.root, uniqueIdentify);
            default:
                return undefined;
        }
    };
    FileSystem.prototype.getFolderById = function (folder, id) {
        var isFound = false;
        var i = 0;
        var result = undefined;
        if (folder.id === id) {
            return folder;
        }
        while (!isFound && i < folder.items.length) {
            var file = folder.items[i];
            if (file.id === id && file instanceof folder_1.Folder) {
                isFound = true;
                return file;
            }
            else if (file instanceof folder_1.Folder) {
                result = this.getFolderById(file, id);
                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    };
    FileSystem.prototype.getParentById = function (folder, id) {
        var isFound = false;
        var i = 0;
        var result = undefined;
        while (!isFound && i < folder.items.length) {
            var file = folder.items[i];
            if (file.id === id && file instanceof folder_1.Folder) {
                isFound = true;
                return folder;
            }
            else if (file instanceof folder_1.Folder) {
                result = this.getParentById(file, id);
                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    };
    FileSystem.prototype.getFileById = function (folder, id) {
        var isFound = false;
        var i = 0;
        var result = undefined;
        if (folder.id === id) {
            return folder;
        }
        while (!isFound && i < folder.items.length) {
            var file = folder.items[i];
            if (file.id === id) {
                isFound = true;
                return file;
            }
            else if (file instanceof folder_1.Folder) {
                result = this.getFileById(file, id);
                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    };
    FileSystem.prototype.getFileByPath = function (folder, path) {
        return undefined;
    };
    FileSystem.prototype.getPath = function (id) {
        return '';
    };
    return FileSystem;
}());
exports.FileSystem = FileSystem;
appModule_1.appModule.service("fileSystem", FileSystem);
//# sourceMappingURL=fileSystem.js.map