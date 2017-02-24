import { appModule } from '../../js/appModule';

export class Content{

}

appModule.component('content', {
    controller: Content,
    templateUrl: "app/components/content/content.component.html",
});