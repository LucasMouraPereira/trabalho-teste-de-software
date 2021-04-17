/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
 module.exports = {
    mutator: "typescript",
    packageManager: "yarn",
    reporters: ['clear-text', 'progress', 'dots', 'dashboard', 'html'],
    testFramework: "jest",
    testRunner: "jest",
    transpilers: ["typescript"],
    coverageAnalysis: "perTest",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    plugins: ['@stryker-mutator/*'],
    jest: {
      enableFindRelatedTests: false,
    }
  };