import { appModule } from '../../js/appModule';

export class BrowserDirectory{

    _isDirectoryOpen: boolean;
    _imageSrc: string;
    setshow: any;
    sys: any;

    constructor(){
        this._isDirectoryOpen = false;
        this._imageSrc = 'browser-directory-close';
    }

    syncDirectoryImage(){
        if (this._isDirectoryOpen) {
            this._imageSrc = 'browser-directory-open';
        }
        this._imageSrc = 'browser-directory-close';
    }

    handleDirectoryImageClick(){
        this._isDirectoryOpen = !this._isDirectoryOpen;
        this.syncDirectoryImage();
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