// @ts-check
/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  root: true,
  extends: require.resolve('@zpcscc/configs/eslint-config/react'),
  parserOptions: {
    project: ['./tsconfig.json']
  }
};
