import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import ip from 'ip';

// https://vitejs.dev/config/
export default defineConfig({
  base:'/chenxi-blog/',
  plugins: [
    reactRefresh(),
    vitePluginImp({
    libList: [
      {
        libName: "antd",
        style: (name) => `antd/lib/${name}/style/index.less`,
      },
    ],
  })],
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
