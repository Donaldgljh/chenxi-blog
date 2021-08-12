import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import ip from 'ip';

export default defineConfig({
  base:'/vite-react-app/',
  plugins: [
    reactRefresh(),
    vitePluginImp({
    libList: [
      {
        libName: "antd",
        style: (name) => `antd/lib/${name}/style/index.less`,
      },
    ],
  }),
  legacy({
    targets: ['ie >= 11'],
    additionalLegacyPolyfills: ['regenerator-runtime/runtime']
  })
],
  server: {
    host: ip.address(),
    port: 3001,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
  },
})
