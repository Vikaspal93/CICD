import {test} from '../1PW__Generic/baseClass.js'
import { common } from '../5PW__CommonData/commonUtilities.js';

export default class login_logout_Page{
    constructor(page){
        this.page = page;
    }
    get userName(){

        return this.page.locator("//input[@name='username']");
    }
    get password(){
        return  this.page.locator("//input[@name='password']");
    }
    get loginButton(){
        return this.page.locator("//button[@type='submit']");
    }
    
    
    async login(){
        await this.userName.fill(common.userName);
        await this.password.fill(common.password);
        await this.loginButton.click();
    }


    get profile(){
        return this.page.locator("//img[@class='oxd-userdropdown-img']");

    }

    get logoutButton(){
        return this.page.locator("//a[@class='oxd-userdropdown-link' and contains(.,'Logout')]");
    }
    async logout(){
        await this.profile.click();
        await this.logoutButton.click();
        await this.page.waitForTimeout(6000);

    }
}