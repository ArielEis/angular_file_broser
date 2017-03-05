import { File } from "./File";

export class Folder extends File{
    items: File[];

    constructor(id: number, name: string, parentId: number){
        super(id, name, parentId);
        this.items = [];
    }

    getType() :string {
        return 'directory';
    }

    addChild(item: File) :void {
        if (!(item instanceof File)) {return;}
        this.items.push(item);
    }

    findChild(id: number) :File{
        if (typeof id !== 'number'){ return undefined; }

        let file = undefined;
        let itemsToRunOfThem = this.items.length;

        while(itemsToRunOfThem--){
            file = this.items[itemsToRunOfThem];
            if (file.id === id){
                return file;
            }
        }

        return undefined;
    }

    deleteChild(id: number) :void{
        if (typeof id !== 'number'){ return undefined; }

        let itemsToRunOfThem = this.items.length;

        while(itemsToRunOfThem--){
            if (this.items[itemsToRunOfThem].id === id){
                this.items.splice(itemsToRunOfThem, 1);
                break;
            }
        }

    }

    getChildren(): File[]{
        return this.items;
    }

}