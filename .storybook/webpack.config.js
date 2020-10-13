const path = require('path');
const theoImporter = require('../lib/theo/scss-importer');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = ({ config, mode }) => {
  const cssRule = config.module.rules.find(r => r.test.test('example.css'));
  const postcssLoader = cssRule.use.find(
    u => u.loader && u.loader.includes('postcss-loader')
  );

  return {
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        'design-system-name': path.resolve(__dirname, `../src`),
        '.storybook': path.resolve(__dirname, `../.storybook`)
      }
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.scss$/,
          sideEffects: true,
          use: [
            'style-loader',
            'css-loader',
            postcssLoader,
            {
              loader: 'sass-loader',
              options: { sassOptions: { importer: [theoImporter] } }
            }
          ],
          include: path.resolve(__dirname, '../')
        },
        {
          test: /\/tokens\.yml$/,
          use: path.resolve(__dirname, '../lib/theo/webpack-loader.js')
        },
        {
          test: /\/Icon\.js$/,
          use: path.resolve(__dirname, './icon-component-loader.js')
        }
      ]
    },
    plugins: [
      ...config.plugins,
      new SVGSpritemapPlugin(path.resolve(__dirname, '../src/icons/**/*.svg'), {
        sprite: {
          prefix: false,
          generate: {
            symbol: true
          }
        }
      })
    ]
  };
};
