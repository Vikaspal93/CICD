//import {test} from '@playwright/test'
import {test,page} from '../../1PW__Generic/baseClass.js'
import { common } from '../../5PW__CommonData/commonUtilities';
import NewUser from '../../2PW_Page_Object_Model/Admin/addNewUserWithVailidData.js'
import { scenario1 } from '../../4PW__TestData/Admin/vailidData.js';

test('Add new User with vailid data', async()=>{
    const admin = new NewUser(page);
    await admin.clickonadmin.click();
    //await page.goto(common.url);
    console.log("chcking CICD")
    //await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //await page.locator("//input[@name='username']").fill(common.userName);
    //await page.locator("//input[@name='username']").fill("Admin");
    //await page.locator("//input[@name='password']").fill(common.password);
    //await page.locator("//input[@name='password']").fill("admin123");
    //await page.locator("//button[@type='submit']").click();
    //await page.locator("(//a[@class='oxd-main-menu-item'])[1]").click();
    await page.locator("(//button[contains(@class,'oxd-button')])[3]").click();
    await page.locator("(//div[@class='oxd-select-text--after'])[1]").click();
    const roleDropdown = page.locator("//div[@class='oxd-select-dropdown --positon-bottom']");
    await roleDropdown.last().click();
    await page.locator("//input[@placeholder='Type for hints...']").fill(scenario1.addUserEmpName);
    await page.locator("//div[@role='listbox' and contains(.,'Rahul')]").click();
    await page.locator("(//div[@class='oxd-select-text--after'])[2]").click();
    const statusDropDown = page.locator("//div[@role='listbox']");
    await statusDropDown.first().click();
    console.log("sangeetha");

    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(scenario1.addUserName);
    await page.locator("(//input[@type='password'])[1]").fill(scenario1.addUserPassword);
    await page.locator("(//input[@type='password'])[2]").fill(scenario1.addUserPassword);
    //await page.locator("//button[@type='submit']").click();

    //await page.locator("//img[@class='oxd-userdropdown-img']").click();
    //await page.locator("//ul[@class='oxd-dropdown-menu']").last().click();

    await page.waitForTimeout(6000);







  


})