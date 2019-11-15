module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "office-ui-fabric-react/lib/(.*)$": "office-ui-fabric-react/lib-commonjs/$1",
    "@uifabric/utilities/lib/(.*)$": "@uifabric/utilities/lib-commonjs/$1",
    "@uifabric/icons/lib/(.*)$": "@uifabric/icons/lib-commonjs/$1"
  }
};