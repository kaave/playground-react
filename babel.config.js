module.exports = {
  presets: [
    ['@babel/preset-env', process.env.NODE_ENV !== 'test' ? { modules: false } : {}],
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
  plugins: [
    /**
     * for TypeScript
     */
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-class-properties',
  ],
};
