# Playwright-UI-API-Framework

## Technologies
* javascript
* Playwright
* Winston
* Docker
* GitHub Actions

## Setup project locally
* Install dependencies - 'npm install'
* Run the test - 'npx playwright test'
* To run the test parallel - Go to 'playwright.config.js' and increase the works.

playwright.config.js has the general configurations of the framework. (Eg- BaseURL, Header values, timeout, report type, number of workers(parallel run))

## Report
* Report can be found in the '**playwright-report**'
* Video of the play is getting record in '**test-results**' directory under test name, if the test fails.

## Run Docker image

Build the image and run tests.
* docker build -t playwright-framework .