/* eslint-disable no-extra-boolean-cast */
import { defineConfig, ConfigEnv } from 'vite';
import styleImport from 'vite-plugin-style-import';
import react from '@vitejs/plugin-react';

import { viteMockServe } from 'vite-plugin-mock';
import { visualizer } from 'rollup-plugin-visualizer';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command }: ConfigEnv) => {
  return {
    base: './',
    plugins: [
      react(),
      // mock
      viteMockServe({
        mockPath: 'mock', //mock文件地址
        localEnabled: !!process.env.USE_MOCK, // 开发打包开关
        prodEnabled: !!process.env.USE_CHUNK_MOCK, // 生产打包开关
        logger: false, //是否在控制台显示请求日志
        supportTs: true
      }),
      styleImport({
        libs: []
      }),
      !!process.env.REPORT
        ? visualizer({
            open: true,
            gzipSize: true,
            filename: path.resolve(__dirname, 'dist/stats.html')
          })
        : null
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: '/src'
        }
      ]
    },
    css: {
      // css预处理器
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          charset: false,
          additionalData: '@import "./src/assets/less/common.less";'
        }
      }
    },
    build: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      },
      outDir: 'dist', //指定输出路径
      assetsDir: 'assets' //指定生成静态资源的存放路径
    }
  };
});
