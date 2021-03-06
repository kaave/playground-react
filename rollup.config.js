import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { string } from 'rollup-plugin-string';

import pkg from './package.json';

const name = 'RollupTypeScriptBabel';
const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

export default {
  input: 'src/index.tsx',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'es', sourcemap: true },
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
