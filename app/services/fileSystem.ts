import {appModule} from "../js/appModule";

appModule.service("fileSystem", function () {
    class FileSystem{
        _root: Object;

        constructor(){
            this._root = {
                id: 0,
                name: 'ROOT',
                parent: -1,
                type: 'directory'
            }
        }
    }


    this._fileSystem = new FileSystem();
});