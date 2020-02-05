import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'main.js',
  output: {
    file: 'docs/bundle.js',
    format: 'umd',
    name: 'appMain'
  },
  plugins: [
    resolve(),
    commonjs({
      include: '/node_modules/',
      namedExports: {
        'node_modules/interactjs': ['interactjs']
      },
    }),
  ]
};
