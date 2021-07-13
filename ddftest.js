//This script is designed to search the DDF website.
//https://digitaldreamforge.com
//Written by John Kincaid.

//Instantiate
const {By,Key,Builder,until, Actions, Browser, WebDriver} = require('selenium-webdriver');
const { write } = require('selenium-webdriver/io');
const fs = require('fs');

//Use Opera.
const opera = require('selenium-webdriver/opera');

//Main test thread.
(async function main(){
    //Build the browser.
    let driver = await new Builder().forBrowser('opera').build();

    //Set timeouts for five seconds..
    await driver.manage().setTimeouts({implicit: 5000});

    //This function performs the navigation.
    async function navigate(){
        await driver.get('https://www.digitaldreamforge.com');
        await driver.sleep(1000);
    }

    //This function verifies the site was reached.
    async function navigateVerify(){
        var website = "Software Quality Assurance | Digital Dream Forge – Don't launch your mobile apps without running them by our expert software QA testers! Get a quote for affordable software testing with Digital Dream Forge.";

        if (website === await driver.getTitle()){
            console.log('Navigation: PASS');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', 'Navigation: PASS'+'\r\n');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', '\r\n');
        } else {
            console.log('Navigation: FAIL');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', 'Navigation: FAIL'+'\r\n');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', '\r\n');
        }
    }

    //This function copies the blockquote text to the console.
    async function blockQuote(){
        const quoteFunc = driver.findElement(By.className('reviews')).getText();
        
        console.log('Blockquote text:');
        fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', 'Blockquote text:'+'\r\n');
        await quoteFunc.then(function(text){
            console.log(text);
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', text+'\r\n');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', '\r\n');
        })
    }

    //This function copies the page heading text to the console.
    async function heading(){
        const header = driver.findElement(By.className('title-heading-center')).getText();

        console.log('Page header H1 text:');
        fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', 'Page header H1 Text:'+'\r\n');
        await header.then(function(text){
            console.log(text);
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', text+'\r\n');
            fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', '\r\n');
        })
    }

    //Main test loop to try to capture errors.
    try {
        //Perform navigation.
        await navigate();

        //Separate our log from the rest of the code.
        console.log('--------------------');
        console.log('Results:');

        //Creat a log file.
        fs.writeFileSync('C:/Users/DDF Employee/Desktop/log.txt', 'Results:'+'\r\n');
        fs.appendFileSync('C:/Users/DDF Employee/Desktop/log.txt', '\r\n');

        //Verify navigation.
        await navigateVerify();
        console.log('');

        //Print the page header.
        await heading();
        console.log('');

        //Print the blockquote from the main page.
        await blockQuote();

        //End of results
        console.log('--------------------');

    } finally {
        //Wait then quit the test.
        await driver.sleep(500);
        await driver.quit();
    }
})();