module.exports = {
  // 建议：printWidth 从 180 改为 100-120
  // 180 太宽，不利于代码阅读和 Git diff
  printWidth: 100,

  // 保持：2 空格缩进（Vue 官方风格）
  tabWidth: 2,

  // 保持：使用空格而非制表符
  useTabs: false,

  // 建议：考虑使用分号（避免 ASI 问题）
  // 如果团队习惯无分号，可以保持 false
  semi: false,

  // 保持：单引号（JavaScript 风格）
  singleQuote: true,

  // 保持：对象属性引号按需添加
  quoteProps: 'as-needed',

  // 保持：JSX 双引号
  jsxSingleQuote: false,

  // 建议：从 'all' 改为 'es5'
  // 'all' 会在函数参数后加逗号，可能影响旧环境兼容
  trailingComma: 'es5',

  // 保持：大括号内空格
  bracketSpacing: true,

  // 修正：jsxBracketSameLine 已废弃，改为 bracketSameLine
  bracketSameLine: false,

  // 保持：箭头函数参数括号
  arrowParens: 'always',

  // 建议：Vue 项目特定配置
  // 让 Vue 文件中的 <template>、<script>、<style> 缩进
  vueIndentScriptAndStyle: true,

  // 保持：LF 换行符
  endOfLine: 'lf',

  // 建议：HTML 属性换行策略
  // 对于 Vue 模板，建议每个属性一行
  singleAttributePerLine: true,
}
