import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { string } from 'rollup-plugin-string';

import pkg from './package.json';

const name = 'RollupTypeScriptBabel';
const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

export default {
  input: 'src/index.tsx',
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
  plugins: [
    peerDepsExternal(),
    nodeResolve({ extensions }),
    string({
      include: 'src/**/*.{md,txt,frag,vert,glsl}',
      // exclude: ['**/index.html'],
    }),
    commonjs(),
    babel({ extensions, include: ['src/**/*'] }),
  ],
};
