module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 类型必须小写
    'type-case': [2, 'always', 'lower-case'],
    // 类型必须在以下范围内
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能
        'fix', // 修复
        'docs', // 文档变更
        'style', // 代码格式（不影响代码运行的变动）
        'refactor', // 重构（既不是新增功能，也不是修复bug的代码变动）
        'perf', // 性能优化
        'test', // 测试
        'build', // 构建系统或外部依赖的变动
        'ci', // CI配置变动
        'chore', // 其他修改（不在src或test文件中的修改）
        'revert', // 回退
      ],
    ],
    // 主题（提交简述）不能为空
    'subject-empty': [2, 'never'],
    // 主题长度不能超过100个字符
    'subject-max-length': [2, 'always', 100],
    // 主题不能以句号结尾
    'subject-full-stop': [2, 'never', '.'],
    // 主题必须以空格开头
    'subject-case': [2, 'never', ['sentence-case', 'start-case', 'pascal-case', 'upper-case']],
    // 正文（body）必须以空行开头
    'body-leading-blank': [1, 'always'],
    // 正文每行长度不能超过100个字符
    'body-max-line-length': [2, 'always', 100],
  },
};