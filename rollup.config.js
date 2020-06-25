import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import includePaths from 'rollup-plugin-includepaths'
import pkg from './package.json'

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    commonjs(),
    postcss({
      extract: false,
      use: ['sass'],
    }),
    includePaths({
      paths: ['src'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
    }),
    external(),
    resolve(),
  ],
}
