import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
 
export default {
  input: "xxx.js", // 打包入口
  output: [
    {
      // 输出文件
      file: "dist/name.js",
      // umd是兼容amd/cjs/iife的通用打包格式，适合浏览器
      format: "umd",
      // 全局名
      name: "name",
    },
  ],
  plugins: [
    // 打包插件
    resolve(), // 查找和打包node_modules中的第三方模块
    commonjs(), // 将 CommonJS 转换成 ES2015 模块供 Rollup 处理
  ],
};