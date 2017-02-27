import { appModule } from '../../js/appModule';

export class ContentFile{
    id :number;

    constructor(){

    }
}

appModule.component('contentFile', {
    controller: ContentFile,
    templateUrl: "app/components/content_file/content_file.component.html",
    bindings:{
        id: "<",
    }
});