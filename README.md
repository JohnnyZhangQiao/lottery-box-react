# 项目介绍

本项目为个人项目，采用React + Typescript + Vite搭建。



# 主要技术栈

- [React](https://reactjs.org/)
- [Typescript](https://www.tslang.cn/index.html)
- [Vite](https://cn.vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [mockjs](http://mockjs.com/)
- [vite-plugin-mock](https://github.com/anncwb/vite-plugin-mock)
- [Ant Design Mobile](https://mobile.ant.design)



# 工程目录

```bash
.
├── README.md
├── index.html           项目入口
├── mock                 mock目录
├── package.json
├── public
├── src
│   ├── App.tsx          主应用
│   ├── app.module.less
│   ├── api              请求中心
│   ├── assets           资源目录（图片、less、css等）
│   ├── components       项目组件
│   ├── constants        常量
│   └── vite-env.d.ts    全局声明
│   ├── main.tsx         主入口
│   ├── pages            页面目录
│   ├── routes           路由配置
│   ├── types            ts类型定义
│   ├── store            状态管理
│   └── utils            基础工具包
├── test                 测试用例
├── tsconfig.json        ts配置
├── .eslintrc.js         eslint配置
├── .prettierrc.json     prettier配置
├── .gitignore           git忽略配置
└── vite.config.ts       vite配置
```



# 运行项目

1. 安装依赖

```r
npm i
```



2. 在你的开发环境配置eslint & prettier（略）



3. 本地运行项目

```bash
## 启用本地mock功能
npm run dev:mock

## 不启用mock（需要保证有服务器接入）
npm run dev
```



4. 打包构建

```bash
npm run build
```



# 写在最后

项目在不定期完善中，看时间而定吧...

**假如本项目对你有帮助，请给作者点个小星星，感谢！**
