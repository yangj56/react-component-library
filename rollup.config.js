import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import url from '@rollup/plugin-url';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';
import babel from '@rollup/plugin-babel';

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
      include: ['**/*.ttf', '**/*.woff'],
      limit: Infinity,
    }),
    resolve(),
    peerDepsExternal(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
    postcss({
      extensions: ['.css'],
    }),
    babel({
      exclude: 'node_modules/**',
      plugins: [
        'babel-plugin-styled-components',
        {
          namespace: 'appname-',
          displayName: false,
          fileName: false,
        },
      ],
    }),
  ],
};

export default config;
