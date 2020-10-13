function IconComponentLoader(source) {
  return source.replace(
    `import icons from '../../icons/spritemap.svg';`,
    `const icons = "spritemap.svg";`
  );
}

module.exports = IconComponentLoader;
