const { defineConfig } = require("cypress");
const { registerArgosTask } = require("@argos-ci/cypress/task");

module.exports = defineConfig({
  // setupNodeEvents can also be defined in "component"
  e2e: {
    async setupNodeEvents(on, config) {
      registerArgosTask(on, config, {
        // Enable upload to Argos only when it runs on CI.
        uploadToArgos: !!process.env.CI,
        // Set your Argos token (required only if you don't use GitHub Actions).
        token: "ARGOS_TOKEN=argos_379d0c94361b7b3243e2ff32dda7693caa",
      });

      // include any other plugin code...
    },
  },
});