import {test} from '../../1PW__Generic/baseClass.js'
export default class NewUser{
    constructor(page){
        this.page = page;
    }

    get clickonadmin(){
        return this.page.locator("(//a[@class='oxd-main-menu-item'])[1]");
    }
}