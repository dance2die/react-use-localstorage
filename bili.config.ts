import { Config } from 'bili';

const config: Config = {
  input: 'src/index.ts',
  output: {
    format: ['es', 'cjs', 'umd', 'umd-min'],
    target: 'browser',
    moduleName: 'useLocalStorage',
  },
  babel: {
    minimal: true,
  },
  plugins: {
    typescript2: {
      clean: true,
    },
  },
  externals: ['react'],
};

export default config;
