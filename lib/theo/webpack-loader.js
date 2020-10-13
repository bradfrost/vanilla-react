const theo = require('theo');

function theoLoader(source) {
  const done = this.async();

  theo
    .convert({
      transform: {
        type: 'web',
        file: this.resourcePath,
        data: source
      },
      format: {
        type: 'raw.json'
      }
    })
    .then(json => {
      const content = `export default ${json}`;
      done(null, content);
    })
    .catch(({ message }) => {
      done(
        new Error(
          `Theo design token error in ${this.resourcePath} - ${message}`
        )
      );
    });
}

module.exports = theoLoader;
