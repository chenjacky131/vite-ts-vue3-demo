/**
 * 工程
 */
/**
    代码检查
      目前及未来的TypeScript的代码检查方案就是typescript-eslint
    在TypeScript中使用ESLint
      a.安装eslint
        npm install --save-dev eslint
        npm install --save-dev @typescript-eslint/parser  //  替换掉默认的解析器
        npm install --save-dev @typescript-eslint/eslint-plugin //  最为eslint默认规则的补充
      b.创建配置文件
          在项目的根目录创建.eslintrc.js
          module.exports = {
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint'],
            rules: {
                // 禁止使用 var
                'no-var': "error",
                // 优先使用 interface 而不是 type
                '@typescript-eslint/consistent-type-definitions': [
                    "error",
                    "interface"
                ]
            }
          }
          i.规则的取值一般是一个数组（上例中的 @typescript-eslint/consistent-type-definitions），其
          中第一项是 off、warn 或 error 中的一个，表示关闭、警告和报错。后面的项都是该规则的其他配置。
      c.检查一个ts文件
          {
            "scripts": {
                "eslint": "eslint src/test/index.ts"
            }
          }
      d.检查整个项目的ts文件
          {
            "scripts": {
                "eslint": "eslint src --ext .ts"
            }
          }
      e.使用Prettier修复格式错误
          i.安装
            npm install --save-dev prettier
          ii.配置文件
          // prettier.config.js or .prettierrc.js
          module.exports = {
              // 一行最多 100 字符
              printWidth: 100,
              // 使用 4 个空格缩进
              tabWidth: 4,
              // 不使用缩进符，而使用空格
              useTabs: false,
              // 行尾需要有分号
              semi: true,
              // 使用单引号
              singleQuote: true,
              // 对象的 key 仅在必要时用引号
              quoteProps: 'as-needed',
              // jsx 不使用单引号，而使用双引号
              jsxSingleQuote: false,
              // 末尾不需要逗号
              trailingComma: 'none',
              // 大括号内的首尾需要空格
              bracketSpacing: true,
              // jsx 标签的反尖括号需要换行
              jsxBracketSameLine: false,
              // 箭头函数，只有一个参数的时候，也需要括号
              arrowParens: 'always',
              // 每个文件格式化的范围是文件的全部内容
              rangeStart: 0,
              rangeEnd: Infinity,
              // 不需要写文件开头的 @prettier
              requirePragma: false,
              // 不需要自动在文件开头插入 @prettier
              insertPragma: false,
              // 使用默认的折行标准
              proseWrap: 'preserve',
              // 根据显示样式决定 html 要不要折行
              htmlWhitespaceSensitivity: 'css',
              // 换行符使用 lf
              endOfLine: 'lf'
          };
          iii.接下来安装 VSCode 中的 Prettier 插件，然后修改 .vscode/settings.json：
          {
              "files.eol": "",
              "editor.tabSize": 4,
              "editor.formatOnSave": true,
              "editor.defaultFormatter": "esbenp.prettier-vscode",
              "eslint.autoFixOnSave": true,
              "eslint.validate": [
                  "javascript",
                  "javascriptreact",
                  {
                      "language": "typescript",
                      "autoFix": true
                  }
              ],
              "typescript.tsdk": "node_modules/typescript/lib"
          }
          这样就实现了保存文件时自动格式化并且自动修复 ESLint 错误。
          需要注意的是，由于 ESLint 也可以检查一些代码格式的问题，所以在和 Prettier 配合使用时，
          我们一般会把 ESLint 中的代码格式相关的规则禁用掉，否则就会有冲突了。
      f.使用AlloyTeam的ESLint规则
          i.安装
            npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-alloy

 */
/**
 * 编译成js
 * npm tsc
 */
export const test = 'test';
