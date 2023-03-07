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
      file: packageJson.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    url({
      include: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/fsg.svg'],
      limit: Infinity,
    }),
    resolve(),
    peerDepsExternal(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true, }),
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
