const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const sqlServer = require('cypress-sql-server');
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  config.db = {
    userName: "ath",
    password: "Martin#123",
    server: "athcypressdb.database.windows.net",
    options: {
        database: "atharvahiwasedb",
        encrypt: true,
        rowCollectionOnRequestCompletion : true
    }
  }
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  tasks = sqlServer.loadDBPlugin(config.db);
  on('task', tasks);
  on('task', {
    excelToJsonConvertor(filePath)
    {
      const result = excelToJson({
        source: fs.readFileSync(filePath) // fs.readFileSync return a Buffer
      });
      return result;
    }
  })

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env: {
    url: "https://rahulshettyacademy.com"
  },
  projectId: "kzrq9k",
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/integration/examples/BDD/*.feature'
    //specPattern: 'cypress/integration/examples/*.js'
  },
});

// messages -> json file -> html