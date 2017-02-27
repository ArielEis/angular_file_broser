import { appModule } from '../../js/appModule';

export class Content{
    id :number;

    constructor(){
        this.id = 200;
    }

    debug(){
        console.log(this.id);
    }
}

appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
    bindings: {
        id: "<"
    }
});