import { appModule } from '../../js/appModule';

export class Content{

    constructor(){

    }

}

appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
    bindings:{
        fs: "<",
        sys: "<",
    }
});