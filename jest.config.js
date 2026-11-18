import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
  },
  transform: {
    '^.+\\.(js|jsx)$': ['babel-jest', { configFile: './babel.config.js' }]
  },
  injectGlobals: true,
  roots: [path.resolve(__dirname, 'src')],
  modulePaths: [path.resolve(__dirname, 'src')],
  testMatch: ['**/__tests__/**/*.{js,jsx}', '**/?(*.)+(spec|test).{js,jsx}'],
  transformIgnorePatterns: [
    '/node_modules/',
    '\\.pnp\\.[^\\/]+$'
  ],
};

export default config;
