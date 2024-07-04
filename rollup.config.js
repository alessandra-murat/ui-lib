import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';


const pkg = require('./package.json');

const dts = require('rollup-plugin-dts')

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true, // Adicionar sourcemap aqui
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true, // Adicionar sourcemap aqui
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist',
   })
    ],
  },
  {
    // Se precisar gerar um arquivo .d.ts separado
    input: 'dist/esm/index.d.ts', // Verificar se esta entrada faz sentido para o Rollup
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts.default()]
  },
];
