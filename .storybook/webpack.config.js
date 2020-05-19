const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const sass = require('sass');
const Fibers = require('fibers');

const extensions = ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'];

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [{ loader: require.resolve('babel-loader') }, { loader: require.resolve('react-docgen-typescript-loader') }],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          // importLoaders: 1,
          // localIdentName: '[name]__[local]___[hash:base64:5]',
          // modules: true,
          sourceMap: true,
        },
      },
      {
        loader: 'postcss-loader',
        options: { sourceMap: true },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          implementation: sass,
          sassOptions: {
            fiber: Fibers,
          },
        },
      },
    ],
  });

  config.module.rules.push({
    test: /\.(txt|md|frag|vert|glsl)$/,
    use: 'raw-loader',
  });

  config.resolve.extensions = [...config.resolve.extensions, ...extensions];
  if (!(config.resolve.plugins instanceof Array)) config.resolve.plugins = [];
  config.resolve.plugins.push(new TsconfigPathsPlugin());

  return config;
};
