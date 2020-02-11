import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

import pkg from './package.json';

const name = 'RollupTypeScriptBabel';
const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.main, format: 'cjs' },
    { file: pkg.module, format: 'es' },
    {
      file: pkg.browser,
      format: 'iife',
      plugins: [
        terser({
          output: {
            comments(_node, comment) {
              const { value, type } = comment;
              if (type == 'comment2') {
                return /@preserve|@license|@cc_on/i.test(value);
              }
            },
          },
        }),
      ],
      name,

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {},
    },
  ],
  plugins: [nodeResolve({ extensions }), commonjs(), babel({ extensions, include: ['src/**/*'] })],
};
