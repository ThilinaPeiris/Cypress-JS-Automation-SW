# Cypress-JS-Automation-SW
Cypress-JS-Automation-SW

Used Mochawesome HTML Reports :
Cypress configuration :
  Run the below command in terminal:
  npm i -D mochawesome mochawesome-merge mochawesome-report-generator

  In the cypress.config.js add the reporter settings :
  ```js
  const { defineConfig } = require("cypress");
  module.exports = defineConfig({
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      reportFilename: '[name].html',
      overwrite: true,
      html: true,
      json: false,
    },
  })
  ```
For Cross Broswer Testing:
Use following commands specified in package.json
```json
"scripts": {
    "test": "cypress run --browser chrome --headed",
    "test:chrome": "cypress run --browser chrome",
    "test:firefox": "cypress run --browser firefox",
    "test:edge": "cypress run --browser edge",
    "test:all": "npm run test:chrome && npm run test:firefox && npm run test:edge"
  },
```

