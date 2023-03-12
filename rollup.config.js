import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import cssurl from 'postcss-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const config = {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    url({
      include: ['**/*.ttf', '**/*.woff'],
      limit: Infinity,
    }),
    resolve(),
    peerDepsExternal(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
    postcss({
      plugins: [
        cssurl({
          url: 'inline',
        }),
      ],
    }),
  ],
};

export default config;
