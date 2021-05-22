module.exports = {
  'src/**/*.ts': ['eslint', 'prettier --write', 'git add'],
  '__tests__/**.test.ts': ['jest'],
};
