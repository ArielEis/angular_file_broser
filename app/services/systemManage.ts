"use strict";
import {appModule} from "../js/appModule";

export class SystemManage{

    currentId: number;
    targetId: number;
    contextMenu: boolean;
    contextMenuXposition: number;
    contextMenuYposition: number;
    showContent: boolean;

    constructor(){
        this.currentId = -1;
        this.targetId = -1;
        this.contextMenu = false;
        this.contextMenuXposition = 0;
        this.contextMenuYposition = 0;
        this.showContent = false;
    }

    resetTargetId(): void{
        this.targetId = -1;
    }

    setCurrentId(id: number): void{
        this.showContent = false;
        if (this.currentId === id){
            this.currentId = -1;
            return;
        }
        this.currentId = id;
        this.showContent = true;
    }

    setTargetId(id: number): void{
        this.targetId = id;
    }

    getCurrentId(): number{
        return this.currentId;
    }

    toggleContextMenu(x:number, y:number): void{
        this.contextMenuXposition = x;
        this.contextMenuYposition = y;
        this.contextMenu = !this.contextMenu;
    }

    closeContextMenu(): void{
        this.contextMenu = false;
    }

    getY(): string{
        return this.contextMenuYposition+'px';
    }

    getX(): string{
        return this.contextMenuXposition+'px';
    }
}

appModule.service("systemManage", SystemManage);

