import { appModule } from '../../js/appModule';

export class BrowserDirectory{

    _isDirectoryOpen: boolean;

    constructor(){
        this._isDirectoryOpen = false;
    }

    syncDirectoryImage(){
        if (this._isDirectoryOpen) {
            return 'pic/open_directory.png';
        }
        return 'pic/close_directory.png';
    }

    handleDirectoryImageClick(){
        this._isDirectoryOpen = !this._isDirectoryOpen;
    }

}

appModule.component('browserDirectory', {
    controller: BrowserDirectory,
    templateUrl: "app/components/browser_directory/browser_directory.component.html",
    bindings: {
        directory: "<",
        setshow: "=",
    }
});