// thanks to https://basalt.io/journal/theo-design-tokens-using-node-sass-importer-for-any-build-method

const theo = require('theo');
const path = require('path');

function theoImporter(url, prev, done) {
  if (!/\.ya?ml$/.test(url)) return null;

  const prevDirectory = path.parse(prev).dir;
  const file = path.resolve(prevDirectory, url);

  theo
    .convert({
      transform: {
        type: 'web',
        file
      },
      format: {
        type: 'default.scss'
      }
    })
    .then(contents => {
      done({ contents });
    })
    .catch(({ message }) => {
      done(new Error(`Theo design token error in ${url} - ${message}`));
    });
}

module.exports = theoImporter;
