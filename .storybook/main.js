const stories = [
  './components/AtomsTokens/Tokens.stories.js',
  '../src/components/**/*.stories.js',
  !process.env.STORYBOOK_COMPONENTS_ONLY && './**/*.stories.js'
].filter(_ => _);

module.exports = {
  stories,
  addons: ['@storybook/addon-essentials', '@storybook/addon-links']
};
