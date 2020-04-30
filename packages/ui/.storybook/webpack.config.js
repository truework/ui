const path = require('path');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  });

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.alias = {
    src: path.resolve(__dirname, '../src'),
    '@': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components'),
    '@icons': path.resolve(__dirname, '../src/icons'),
  };
  return config;
};
