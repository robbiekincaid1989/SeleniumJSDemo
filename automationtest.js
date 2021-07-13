//This script is designed to enter information into Alan Haugen's Automation Test
//website:
//Test automation site URL was here.
//It will then select a radio button, process the text, and console log any errors.
//It will verify data and call out what isn't. 
//Written by John Kincaid.

//Instantiate the session.
const {By,Key,Builder,until, Actions, Browser, WebDriver} = require('selenium-webdriver');

//Use Opera.
const opera = require('selenium-webdriver/opera');

//Begin script body.
(async function main(){
    //Declare our variables.

    //Name Field.
    var name = "John Kincaid";
    //Email Field.
    var email = "work_email_was_here";
    //Text Field 1.
    var text1 = "Demo text one.";
    //Text Field 2.
    var text2 = "Demo text two.";
    //Text Field 3.
    var text3 = "Demo text three.";
    //Text Field 4.
    var text4 = "Demo text four.";
    //Text Field 5.
    var text5 = "Demo text five.";

    //Open the browser.
    let driver = await new Builder().forBrowser('opera').build();

    //Navigate to the automation test websit.
    //Took out my org's test site. await driver.get('test_site_here');

    //Enter text into the Name field.
    const nameField = driver.findElement(By.id('name_tf')).sendKeys(name);

    //Enter text into the Email field.
    const emailField = driver.findElement(By.id('email_tf')).sendKeys(email);

    //Enter text into the five text fields.
    const textField1 = driver.findElement(By.id('field_1_tf')).sendKeys(text1);
    const textField2 = driver.findElement(By.id('field_2_tf')).sendKeys(text2);
    const textField3 = driver.findElement(By.id('field_3_tf')).sendKeys(text3);
    const textField4 = driver.findElement(By.id('field_4_tf')).sendKeys(text4);
    const textField5 = driver.findElement(By.id('field_5_tf')).sendKeys(text5);

    //Select the radio button with a guaranteed error to compare and call out (100%).
    const radioButt = driver.findElement(By.xpath("//input[@value='20']")).click();

    //Select the GO! button.
    const goButt = driver.findElement(By.className('MuiButton-label')).click();

    //Wait after the button is pressed.
    await driver.sleep(2000);

    //Send our submitted text to the log.
    console.log('');
    console.log('Submitted text:');
    console.log(name);
    console.log(email);
    console.log(text1);
    console.log(text2);
    console.log(text3);
    console.log(text4);
    console.log(text5);
    console.log('');
    
    //Send our error-ridden text to the log.
    console.log('Erroneous text:');

    //Error name.
    promiseName = driver.executeScript('return document.getElementById("name_textBox").value');
    promiseName.then(function(text)
        {
            console.log(text);
            console.log(getDifference(name, text), 'was inserted.');
            console.log('');
        }
    )

    //Error email.
    promiseEmail = driver.executeScript('return document.getElementById("email_textBox").value');
    promiseEmail.then(function(text)
        {
            console.log(text);
            console.log(getDifference(email, text), 'was inserted.');
            console.log('');
        }
    )

    //Error field one.
    promiseField1 = driver.executeScript('return document.getElementById("field_1_textBox").value');
    promiseField1.then(function(text)
        {
            console.log(text);
            console.log(getDifference(text1, text), 'was inserted.');
            console.log('');
        }
    )

    //Error field two.
    promiseField2 = driver.executeScript('return document.getElementById("field_2_textBox").value');
    promiseField2.then(function(text)
        {
            console.log(text);
            console.log(getDifference(text2, text), 'was inserted.');
            console.log('');
        }
    )

    //Error field three.
    promiseField3 = driver.executeScript('return document.getElementById("field_3_textBox").value');
    promiseField3.then(function(text)
        {
            console.log(text);
            console.log(getDifference(text3, text), 'was inserted.');
            console.log('');
        }
    )

    //Error field four.
    promiseField4 = driver.executeScript('return document.getElementById("field_4_textBox").value');
    promiseField4.then(function(text)
        {
            console.log(text);
            console.log(getDifference(text4, text), 'was inserted.');
            console.log('');
        }
    )

    //Error field five.
    promiseField5 = driver.executeScript('return document.getElementById("field_5_textBox").value');
    promiseField5.then(function(text)
        {
            console.log(text);
            console.log(getDifference(text5, text), 'was inserted.');
            console.log('');
        }
    )
    
    //This function finds and gets the difference between two strings.
    async function getDifference(a, b)
    {
        var i = 0;
        var j = 0;
        var result = "";

        while (j < b.length)
        {
            if (a[i] != b[j] || i == a.length)
                result += b[j];
            else
                i++;
            j++
        }
        return result;
    }

    //End the test after a second.
    await driver.sleep(1000);
    await driver.quit();
}) ();