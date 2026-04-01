require("dotenv").config();

const { defineConfig } = require("cypress");

const baseUrl = process.env.BASE_URL || "http://localhost:3000";

module.exports = defineConfig({
  e2e: {
    baseUrl,
    supportFile: "cypress/support/e2e.js",
  },
});
