import { resolve } from 'path'
import pxToViewPort from 'postcss-px-to-viewport';
//ANALYZE=1 ANALYZE_MODE=server umi build
// ref: https://umijs.org/config/
export default {
  publicPath: '/build/', // /build/dist/ | http://cdn.com/foo
  history: 'hash',
  ignoreMomentLocale: true,//忽略 moment 的 locale 文件，用于减少尺寸。
  outputPath: './build',
  hash: true,//开启 hash 文件后缀
  targets: {
    ie: 11,
    chrome: 49,
    firefox: 45,
    safari: 10,
    edge: 13,
    ios: 10
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true,
      },
      hd: true,
      fastClick: true,
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loader',
      },
      title: 'myapp',
      dll: true,
      esLint: false,
      links: [
        { rel: 'icon', href: "/favicon.png" },
      ],
      // scripts: [
      //   { src: 'https://cdn.jsdelivr.net/npm/eruda@1.5.4/eruda.min.js' },
      //   { content: `eruda.init();` },
      // ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
  extraPostCSSPlugins: [
    pxToViewPort({
      viewportWidth: 750,
      // viewportHeight: 667,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false,
    }),
  ],
  theme: './config/theme.config.js',
  proxy: {
    '/ydh': {
      target: 'http://120.26.211.143:5001',
      changeOrigin: true,
      pathRewrite: { "^/ydh" : "/" }
    },
    '/wx': {
      target: 'http://ydhtest.fetower.com',
      changeOrigin: true,
      pathRewrite: { "^/wx" : "/" }
    },

  },
  alias: {
    assets: resolve(__dirname, './src/assets/'),
    components: resolve(__dirname, './src/components'),
    api: resolve(__dirname, './src/services/'),
    utils: resolve(__dirname, './src/utils/'),
    themes: resolve(__dirname, './src/themes'),
  },
  chainWebpack(config, { webpack }){
    if (process.env.NODE_ENV === 'production') {
      config.merge({
        plugin: {
          install: {
            plugin: require('uglifyjs-webpack-plugin'),
            args: [{
              sourceMap: false,
              uglifyOptions: {
                compress: {
                  // 删除所有的 `console` 语句
                  drop_console: true,
                },
                output: {
                  // 最紧凑的输出
                  beautify: false,
                  // 删除所有的注释
                  comments: false,
                },
              },
            }],
          },
        },
      });
    }
  },
}
