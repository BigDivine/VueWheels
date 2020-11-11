# demo

> A Vue.js Demo project

## 手动添加的依赖
- vux、vux-loader：使用vux组件库
- vuex：状态管理-store
- less、less-loader：配合使用vux的less样式

## 三方库注意事项
### VUX 最新为2.9.4
2020-6-4

+ VUX 必须配合 vux-loader 使用
+ less@3.x 有严重的兼容问题，请暂时使用 less@^2.7.3。
+ 暂未适配 vue-cli@3.x，请知悉。
+ vux支持less-loader最大版本为5.0.0，高版本会报错：loaderContext.getResolve is not a function

2020-11-10

+ pc和移动分开两个包
+ 新增判断移动端是ios/Android/web

2020-11-11

+ 去掉vux、vux-loader两个依赖
+ 增加package.json说明：[package文件说明](./packageexplain.md)
+ 编写.eslintric代码检验规则。[点击进入腾讯云eslint指南](https://cloud.tencent.com/developer/chapter/12617)

+ 增加home页，配置路由，配置main.js
