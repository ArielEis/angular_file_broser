import { appModule } from '../../js/appModule';

export class ContentFile{

    constructor(){

    }
}

appModule.component('contentFile', {
    controller: ContentFile,
    templateUrl: "app/components/content_file/content_file.component.html",
    bindings:{
        show: "<",
    }
});