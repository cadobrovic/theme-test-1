const withPlugins = require("next-compose-plugins")

const reactSvg = require("next-react-svg")
const path = require("path")

// const basePath = process.env.NODE_ENV === 'production' ? '/theme-test-1' : '';


module.exports = withPlugins(
  [
    [
      reactSvg,
      {
        include: path.resolve(__dirname, "src/assets/svg"),
      },
    ],
  ],
  {
    images: {
      deviceSizes: [320, 480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      loader: "imgix", // Uncomment this line for STATIC EXPORT
      path: "", // Uncomment this line for STATIC EXPORT
    },
    env: {
      production_type: "static", // Change variable to "static" for STATIC EXPORT
    },
    trailingSlash: true, // Uncomment this line for STATIC EXPORT
    // basePath: '/theme-test-1',
    // assetPrefix: '/theme-test-1/',
  }
)
