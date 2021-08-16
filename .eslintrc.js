module.exports = {
  root: true, //最终配置文件，不再向上寻找
  parser: '@typescript-eslint/parser', //ts解析器
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    less: 'writable',
    ENV: true
  },
  extends: [
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['react', 'react-hooks', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    //指定ESLint可以解析JSX语法
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-unused-vars': 'off',
    'no-cond-assign': 'error',
    'no-debugger': 'warn',
    'no-dupe-args': 'error',
    'no-caller': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-with': 'error',
    'no-catch-shadow': 'error',

    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'prettier/prettier': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useRecoilCallback'
      }
    ]
  }
};
