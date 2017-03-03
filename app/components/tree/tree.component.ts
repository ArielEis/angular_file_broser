import { appModule } from '../../js/appModule';

export class Tree{

}

appModule.component('tree', {
    controller: Tree,
    templateUrl: "app/components/tree/tree.component.html",
    bindings: {
        root: "<",
        setshow: "<",
    }
});