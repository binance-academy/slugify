module.exports = function (api) {
  api.cache(true);
  const presets = ["@babel/preset-env", "minify"];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
