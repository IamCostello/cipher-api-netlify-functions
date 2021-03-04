module.exports = {
  // roots: ["<rootDir>/src"],
  // testMatch: [
  //   "**/__tests__/**/*.+(ts|tsx|js)",
  //   "**/?(*.)+(spec|test).+(ts|tsx|js)",
  // ],
  // transform: {
  //   "^.+\\.(ts|tsx)$": "ts-jest",
  // },

  moduleFileExtensions: ["js", "ts", "json"],
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
