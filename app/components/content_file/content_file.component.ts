import { appModule } from '../../js/appModule';

export class ContentFile{
    sys: any;

    constructor(){

    }

    handleClick(event, id): void{
        switch (event.which){
            case 1:
                this.sys.setCurrentId(id);
                break;
            case 3:
                this.sys.toggleContextMenu(event.x+5, event.y+5);
                break;
        }
    }
}

appModule.component('contentFile', {
    controller: ContentFile,
    templateUrl: "app/components/content_file/content_file.component.html",
    bindings:{
        fs: "<",
        dir: "<",
        sys: "<",
    }
});