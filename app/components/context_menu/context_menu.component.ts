"use strict";
import {appModule} from "../../js/appModule";
export class ContextMenu{

    constructor() {
    }

}

appModule.component('contextMenu', {
    controller: ContextMenu,
    templateUrl: "app/components/context_menu/context_menu.component.html",
    bindings:{
        sys: "<",
    }
});