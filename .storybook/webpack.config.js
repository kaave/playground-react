const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{ loader: require.resolve('babel-loader') }, { loader: require.resolve('react-docgen-typescript-loader') }],
  });
  config.resolve.extensions = [...config.resolve.extensions, ...extensions];
  if (!(config.resolve.plugins instanceof Array)) config.resolve.plugins = [];
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  return config;
};
