"use strict";
import {appModule} from "../js/appModule";

export class SystemManage{

    currentId: number;
    targetId: number;

    constructor(){
        this.currentId = -1;
        this.targetId = -1;
    }

    resetTargetId(): void{
        this.targetId = -1;
    }

    setCurrentId(id: number): void{
        console.log(id);
        this.currentId = id;
    }

    setTargetId(id: number): void{
        this.targetId = id;
    }
}

appModule.service("systemManage", SystemManage);

