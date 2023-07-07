import { Given, When, Then } from "@wdio/cucumber-framework";
import DashboardPage from "../pageObject/DashboardPage";
import HomePage from "../pageObject/HomePage";
import detailProductPage from "../pageObject/detailProductPage";


When('I login using valid data', async() =>{
    await HomePage.logIN('standard_user','secret_sauce');
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    await expect(DashboardPage.aTitle).toHaveText('Products');
})

When('sorting value is {string}', async(option)=>{
    DashboardPage.sort(option);

})

Then('I verify items are sorted {string} successfully', async(option)=>{
    await expect(DashboardPage.sortActive).toHaveText(option);
})

When('I click product {string}', async(productName)=>{
    await DashboardPage.chooseProduct(productName);
})

Then('I go to product {string} page', async(productName)=>{
    await expect(detailProductPage.detailName).toHaveText(productName);
    await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4')
})

When('I add item to cart', async()=>{
    await DashboardPage.btnAddCartLabsBackpack.click();
    await expect(DashboardPage.btnRemoveLabsBackpack).toBeDisplayed();
})

Then('cart show amount item is 1', async()=>{
    await expect(DashboardPage.cardBadge).toBeDisplayed();
    await expect(DashboardPage.cardBadge).toHaveText('1');
})

When('I add another item to the cart', async()=>{
    await DashboardPage.btnAddCartTshirtRed.click()
})

Then('cart show amount item is 2', async()=>{
    await expect(DashboardPage.cardBadge).toHaveText('2');
})