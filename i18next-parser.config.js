module.exports = {
  createOldCatalogs: false,
  lexers: {
    js: ['JsxLexer'],
    jsx: ['JsxLexer'],
    ts: ['JsxLexer'],
    tsx: ['JsxLexer']
  },
  locales: ['en', 'zh'],
  // output 根据process.cwd()
  output: 'src/locales/$LOCALE/$NAMESPACE.json',
  // input 根据本配置文件位置
  input: ['src/**/*.{js,ts,jsx,tsx}'],
  sort: true,
  failOnWarnings: false,
  useKeysAsDefaultValue: true,
  defaultNamespace: 'app'
};
