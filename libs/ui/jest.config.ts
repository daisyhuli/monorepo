/* eslint-disable */
export default {
  displayName: 'ui',
  preset: '../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'coverage',
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  collectCoverage: true,
  testResultsProcessor: "jest-sonar-reporter",
};
