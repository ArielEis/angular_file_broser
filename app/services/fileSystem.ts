import {File} from "./file";
import {Folder} from "./folder";
import {TextFile} from "./textFile";
import {appModule} from "../js/appModule";

export class FileSystem{
    root: Folder;
    nextId: number;

    constructor(){
        this.root = new Folder(0, 'Root', -1);
        this.nextId = 1;

        this.addFolder('sub1', 0);
        this.addFolder('sub2', 0);
        this.addFolder('sub3', 1);
        this.addFolder('sub4', 2);
        this.addFile('text1', 0, '');
        this.addFile('text2', 1, '');
    }

    addFolder(name: string, parentId: number) :void{
        let folder = this.getFolderById(this.root, parentId);
        if (!(folder instanceof Folder)){ return; }

        folder.addChild(new Folder(this.nextId++, name, parentId));
    }

    addFile(name: string, parentId: number, content: string) :void{
        let folder = this.getFolderById(this.root, parentId);
        if (!(folder instanceof Folder)){ return; }

        folder.addChild(new TextFile(this.nextId++, name, parentId, content));

    }

    renameItem(id: number, newName: string) :void{
        let file = this.getItem(id);
        if (!(file instanceof File)){ return; }

        file.rename(newName);
    }

    deleteItem(id: number) :void{
        let folder = this.getParentById(this.root, id);
        if (!(folder instanceof Folder)){ return; }

        folder.deleteChild(id);
    }

    getItem(uniqueIdentify: any) :File{
        switch (typeof uniqueIdentify){
            case 'number':
                return this.getFileById(this.root, uniqueIdentify);

            case 'string':
                return this.getFileByPath(this.root, uniqueIdentify);

            default:
                return undefined;
        }
    }

    getFolderById(folder: Folder, id: number) :Folder{
        let isFound = false;
        let i = 0;
        let result = undefined;

        if (folder.id === id) {
            return folder;
        }

        while (!isFound && i < folder.items.length) {
            let file = folder.items[i];
            if (file.id === id && file instanceof Folder) {
                isFound = true;
                return file;

            } else if (file instanceof Folder){
                result = this.getFolderById(file, id);

                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    }

    getParentById(folder: Folder, id:number) :Folder{
        let isFound = false;
        let i = 0;
        let result = undefined;

        while (!isFound && i < folder.items.length) {
            let file = folder.items[i];
            if (file.id === id && file instanceof Folder) {
                isFound = true;
                return folder;

            } else if (file instanceof Folder){
                result = this.getParentById(file, id);

                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    }

    getFileById(folder: Folder, id: number) :File{
        let isFound = false;
        let i = 0;
        let result = undefined;

        if (folder.id === id) {
            return folder;
        }

        while (!isFound && i < folder.items.length) {
            let file = folder.items[i];
            if (file.id === id) {
                isFound = true;
                return file;

            } else if (file instanceof Folder){
                result = this.getFileById(file, id);

                if (result !== undefined) {
                    return result;
                }
            }
            i++;
        }
    }

    getFileByPath(folder: Folder, path: string) :File{
        return undefined;
    }

    getPath(id: number): string{
        return '';
    }
}


appModule.service("fileSystem", FileSystem);