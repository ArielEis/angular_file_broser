import { File } from "./File";

export class TextFile extends File{
    content: string;

    constructor(id: number, name: string, parentId: number, content: string){
        super(id, name, parentId);
        this.content = content;
    }

    setContent(newContent: string) :void {
        this.content = newContent;
    }

    getType(): string{
        return 'text';
    }
}