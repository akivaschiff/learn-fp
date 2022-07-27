module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  roots: [
    './tests',
  ],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx|js)$': 'ts-jest',
  },
};
