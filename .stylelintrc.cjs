module.exports = {
  plugins: ["stylelint-prettier"],
  extends: [
    // standard 规则集合
    "stylelint-config-standard",
    // standard 规则集合的 scss版本
    "stylelint-config-standard-scss",
    // 样式属性顺序规则
    "stylelint-config-recess-order",
    // 接入 prettier规则
    "stylelint-config-prettier",
    "stylelint-prettier/recommended"
  ],
  // 配置 rules
  rules: {
    // 开启 prettier 自动格式化功能
    "prettier/prettier": true
  }
};
