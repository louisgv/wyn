const { resolve } = require("path")
const { withUnimodules } = require("@expo/webpack-config/addons")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  stories: [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-actions",
    {
      name: "@storybook/addon-react-native-web",
      options: {
        modulesToTranspile: ["react-native-reanimated"],
        babelPlugins: ["react-native-reanimated/plugin"]
      }
    }
  ],
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ]

    return withUnimodules(config, {
      babel: { dangerouslyAddModulePathsToTranspile: ["moti", "@motify"] },
      projectRoot: resolve(__dirname, "../")
    })
  }
}
