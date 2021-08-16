import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import ip from 'ip';

export default defineConfig({
  base: '/vite-react-app/',
  plugins: [
    reactRefresh(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          style: (name) => `antd/es/${name}/style/index`
        }
      ]
    }),
    legacy({
      targets: ['ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime']
    })
  ],
  server: {
    host: ip.address(),
    port: 9000,
    open: true
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#4ea5f2',
          'text-color': '#485378'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
