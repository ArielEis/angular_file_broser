import { appModule } from '../../js/appModule';

export class Browser{

}

appModule.component('browser', {
    controller: Browser,
    templateUrl: "app/components/browser/browser.component.html",
    bindings: {
        root: "<",
        setshow: "<",
        sys: "<",
    }
});