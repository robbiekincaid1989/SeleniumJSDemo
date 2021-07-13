//Navigation test script for the Digital Dream Forge Website:
//www.digitaldreamforge.com
//This script is to navigate the website links via Opera, then close the browser.
//Written by John Kincaid.

//Instantiate the driver session.
const {By,Key,Builder,until, Actions, Browser, WebDriver} = require('selenium-webdriver');

//Telling the session to utilize opera.
const opera = require('selenium-webdriver/opera');

//Get into the script.
(async function main(){
    //Call forth the browser.
    let driver = await new Builder().forBrowser('opera').build();

    //Navigate to the DDF website.
    await driver.get('http://digitaldreamforge.com');

    //Wait before clicking.
    await driver.sleep(3000);

    //Find and select the Services button.
    const services = driver.findElement(By.linkText("SERVICES")).click();

    //Wait again.
    await driver.sleep(3000);

    //Find and select the Clients button.
    const clients = driver.findElement(By.linkText("CLIENTS")).click();

    //Wait some more.
    await driver.sleep(3000);

    //Find and select the Community button.
    const community = driver.findElement(By.linkText("COMMUNITY")).click();

    //Wait once more.
    await driver.sleep(3000);

    //Find and select the Careers button.
    const careers = driver.findElement(By.linkText("CAREERS")).click();

    //Wait again.
    await driver.sleep(3000);

    //Find and select the Contact Us button.
    const contact = driver.findElement(By.linkText("CONTACT US")).click();

    //Wait for the last time!
    await driver.sleep(3000);

    //Find and select the Email button.
    const email = driver.findElement(By.linkText("info@digitaldreamforge.com")).click();

    //Okay, so I lied. Wait again!
    await driver.sleep(3000);

    //Close the test.
    await driver.quit();
})();