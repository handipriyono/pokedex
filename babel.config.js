module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@commons": "./app/commons",
            "@screens": "./app/screens",
            "@navigations": "./app/navigations",
            // Add other aliases as needed
          },
        },
      ],
    ],
  };
};
