import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import legacy from '@vitejs/plugin-legacy';
import vitePluginImp from 'vite-plugin-imp';
import path from 'path';
import ip from 'ip';

export default defineConfig({
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
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
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
    alias: [
      { find: /^~/, replacement: '' },
      { find: /^cxApi/, replacement: path.resolve(__dirname, 'src/api') },
      { find: /^cxAsset/, replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: /^cxComponent/,
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: /^cxLayout/,
        replacement: path.resolve(__dirname, 'src/layouts')
      },
      {
        find: /^cxLocale/,
        replacement: path.resolve(__dirname, 'src/locales')
      },
      {
        find: /^cxPage/,
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: /^cxUtil/,
        replacement: path.resolve(__dirname, 'src/utils')
      }
    ],
    extensions: ['.tsx', '.ts', '.js', '.jsx', '.json']
  },
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        }
      }
    }
  }
});
