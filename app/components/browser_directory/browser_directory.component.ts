import { appModule } from '../../js/appModule';

export class BrowserDirectory{

    _isDirectoryOpen: boolean;
    setshow: any;
    sys: any;

    constructor(){

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

    handleClick(event, id): void{
        switch (event.which){
            case 1:
                this.sys.setCurrentId(id);
                break;
            case 3:
                this.sys.toggleContextMenu(event.x+5, event.y+5);
                break;
        }
    }

}

appModule.component('browserDirectory', {
    controller: BrowserDirectory,
    templateUrl: "app/components/browser_directory/browser_directory.component.html",
    bindings: {
        directory: "=",
        fs: "=",
        sys: "=",
    }
});