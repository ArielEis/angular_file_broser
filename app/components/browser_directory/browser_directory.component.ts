import { appModule } from '../../js/appModule';

export class BrowserDirectory{

}

appModule.component('browserDirectory', {
    controller: BrowserDirectory,
    templateUrl: "app/components/browser_directory/browser_directory.component.html",
});