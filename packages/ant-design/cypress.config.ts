import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
    specPattern: 'components/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("@cypress/code-coverage/task")(on, config);

      on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

      return config;
    },
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // require("@cypress/code-coverage/task")(on, config);

      // on("file:preprocessor", require("@cypress/code-coverage/use-babelrc"));

      // return config;
    },
  },
});
