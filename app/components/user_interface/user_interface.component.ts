import { appModule } from '../../js/appModule';
import {FileSystem} from "../../services/fileSystem";
import {SystemManage} from "../../services/systemManage";

export class UserInterface{


    constructor(private fileSystem: FileSystem, private systemManage: SystemManage){

    }

    get root(){
        return this.fileSystem.root;
    }

    get id(){
        return this.systemManage.currentId;
    }

    get setCurrentId(){
        return this.systemManage.setCurrentId;
    }

    get setTargetId(){
        return this.systemManage.setTargetId;
    }

}

appModule.component('userInterface', {
    controller: UserInterface,
    templateUrl: "app/components/user_interface/user_interface.component.html",
});