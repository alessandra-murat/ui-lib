import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';


const pkg = require('./package.json');

const dts = require('rollup-plugin-dts')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true, 
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true, 
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
      }),
       postcss({
      extract: true,
      minimize: true,
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    }),
    ],
  },
  {

    input: 'dist/esm/index.d.ts', 
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()],
     external: [/\.css$/],
  },
];
