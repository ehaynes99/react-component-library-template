const path = require('path')
const fs = require('fs')

const config = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['./src/**/*.js'],
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/jest-css-modules',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
}

if (fs.existsSync(path.join(__dirname, 'test'))) {
  config.roots.push('<rootDir>/test')
  config.moduleDirectories.push('test')
}

module.exports = config
