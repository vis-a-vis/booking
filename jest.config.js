module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  roots: ['<rootDir>/__tests__'],
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/__coverage__',
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less)$": "<rootDir>/node_modules/jest-css-modules",
  },
};
