import { appModule } from '../../js/appModule';

export class Content{
    currentId :number;

    constructor(){
        this.currentId = 200;
    }

    debug(){
        console.log(this.currentId);
    }
}

appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
    bindings: {
        currentId: "<"
    }
});