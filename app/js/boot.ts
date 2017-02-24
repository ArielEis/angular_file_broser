import * as angular from "angular";
import { appModule } from './appModule';
import { UserInterface } from '../components/user_interface/user_interface.component';
import {TopBar} from "../components/top_bar/top_bar.component";
import {Browser} from "../components/browser/browser.component";
import {Content} from "../components/content/content.component";


appModule;
UserInterface;
TopBar;
Browser;
Content;

angular.bootstrap(document.getElementById('html'), ['web-file-browser']);