import {test,chromium} from '@playwright/test'
import { common } from '../5PW__CommonData/commonUtilities.js';
import login_logout_Page from '../2PW_Page_Object_Model/login.js';

var page;
// beforAll used to launch the browser and navigate the application
test.beforeAll(async()=>{
const browser = await chromium.launch({headless:false});
const context = await browser.newContext()
 page = await context.newPage()
 await page.goto(common.url);

})

// beforeEach used to login the application
test.beforeEach(async()=>{
    const user = new login_logout_Page(page)
    await user.login();
    //await page.locator("//input[@name='username']").fill(common.userName);
    //await page.locator("//input[@name='password']").fill(common.password);
    //await page.locator("//button[@type='submit']").click();
})


// after used to logout the application
test.afterEach(async()=>{
    const user = new login_logout_Page(page)
    await user.logout()
    
    //await page.locator("//img[@class='oxd-userdropdown-img']").click();
  

    //await page.locator("//a[@class='oxd-userdropdown-link' and contains(.,'Logout')]").click();
    

})


// afterAll used to exit and close the browser
test.afterAll(async()=>{

})

export{test,page}