# SeleniumJSDemo
Demo and proof of concept scripts for Selenium Web Driver in JavaScript on Node.JS (written and ran on Windows 10).

To run, you must have Node.JS and the Selenium Webdriver setup according to the Selenium documentation (<a href="https://www.selenium.dev/documentation/en/selenium_installation/installing_selenium_libraries/">See here</a>).

This work was done for an employer that wanted to get into automated testing using Selenium for clients. These are for proof or concept only, and don't actually do a lot other than showing that I can code, and am relatively confortable using Selenium.

<h3>test1.js</h3>
My very first script with Selenium, and my first time writing JavaScript! This is an extremely simple script that just navigates the Digital Dream Forge website, and clicks the Email contact button. This was before I had the idea to write the results of every successful or failed navigation and click to the console or a file.

<h3>ddftest.js</h3>
Basically, this script was a proof of concept - Search specific tags on the Digital Dream Forge website and log their values to the console. I took it a step further by writing their values to a file, which I thought may be easier to include, or copy and paste into a report.

<h3>automationtest.js</h3>
This is hands down my most complicated script. While it won't run now (had to remove a proprietary URL) you should be able to see from the code the functionality that was there.<br>
<br>
Basically, this script linked up to a test page that was made in React. When you entere information into the page and submitted the form, the DOM was refreshed and the text that was entered had extra letters added to them.<br>
<br>
My task was to attempt (yes, it was a proof of concept) to write a script that would detect the altered inputs and find out what (if anything) was altered.<br>
The trick was that since the DOM refreshed Selenium had a hard time finding the results on the "submission" page. The answer? Selenium allows you to run external JavaScript code.<br>
<br>
Using this, I was able to find the changed values, and print both the submitted text, altered text, and what was changed about the text to the console for reporting.
