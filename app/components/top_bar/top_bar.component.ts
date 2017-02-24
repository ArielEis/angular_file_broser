import { appModule } from '../../js/appModule';

export class TopBar{

}

appModule.component('topBar', {
    controller: TopBar,
    templateUrl: "app/components/top_bar/top_bar.component.html",
});