module.exports = {
  presets: [
    [
      '@babel/env',
      {
        targets: {
          browsers: [
            'last 1 version',
            '> 1%',
            'not dead',
            'maintained node versions',
            'not ie > 0',
          ],
        },
        modules: false,
        useBuiltIns: 'usage',
        debug: true,
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
