const pkg = require('./package.json')

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: false,
        useBuiltIns: 'usage',
        corejs: pkg.devDependencies['core-js'].replace(/[^\d.]/, ''),
        // debug: true,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-export-namespace-from',
    process.env.NODE_ENV === 'test' && '@babel/transform-modules-commonjs',
  ].filter(Boolean),
}
