const {
  override,
  addWebpackAlias,
  addLessLoader,
  fixBabelImports,
} = require("customize-cra");
const path = require("path");

const resolve = (dir) => {
  return path.join(__dirname, ".", dir);
};

module.exports = override(
  // antd按需加载，不需要每个页面都引入"antd/dist/antd.css"了
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, //这里一定要写true，css和less都不行
  }),
  // 配置别名
  addWebpackAlias({
    "@": resolve("src"),
  }),
  // antd 定制主题：https://ant.design/docs/react/customize-theme-cn
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {},
    },
  })
);
