const { override, fixBabelImports } = require('customize-cra') // addLessLoader

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
    // style: true
  }),
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@parimay-color': '#1DA57A' }
  // })
)