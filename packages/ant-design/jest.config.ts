/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  clearMocks: true,
  testEnvironment: "jsdom",
  rootDir: "",
  testMatch: ["**/?(*.)(test|spec).ts?(x)"],
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    ".(ts|tsx)": "@swc/jest",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-dom-setup.ts"],
};
