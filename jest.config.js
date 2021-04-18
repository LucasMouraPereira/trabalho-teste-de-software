module.exports = {
  bail: true,
  preset: 'ts-jest',
  rootDir: "src",
  testRegex: ".spec.ts$",
  testEnvironment: "node",
  coverageDirectory: "../reports/jest-coverage",
  clearMocks: true,
  moduleFileExtensions: [
    "js",
    "json",
    "ts"
  ],
  coverageProvider: "v8"
}
