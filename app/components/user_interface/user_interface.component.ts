import { appModule } from '../../js/appModule';

export class UserInterface{

    currentId: number;

    constructor(){
        this.currentId = 0;
    }

}

appModule.component('userInterface', {
    controller: UserInterface,
    templateUrl: "app/components/user_interface/user_interface.component.html",
});