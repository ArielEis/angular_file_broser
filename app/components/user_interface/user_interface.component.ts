import { appModule } from '../../js/appModule';

export class UserInterface{

}

appModule.component('userInterface', {
    controller: UserInterface,
    templateUrl: "app/components/user_interface/user_interface.component.html",
});