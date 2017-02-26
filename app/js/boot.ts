import * as angular from "angular";
import { appModule } from './appModule';
import { UserInterface } from '../components/user_interface/user_interface.component';
import {TopBar} from "../components/top_bar/top_bar.component";
import {Browser} from "../components/browser/browser.component";
import {Content} from "../components/content/content.component";
import {Tree} from "../components/tree/tree.component";
import {BrowserDirectory} from "../components/browser_directory/browser_directory.component";
import {ContentFile} from "../components/content_file/content_file.component";
import {History} from "../components/history/history.component";
import {Address} from "../components/address/address.component";


appModule;
UserInterface;
TopBar;
Browser;
Content;
Tree;
BrowserDirectory;
ContentFile;
History;
Address;

angular.bootstrap(document.getElementById('html'), ['web-file-browser']);