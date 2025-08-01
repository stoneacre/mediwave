/** @type {import('@commitlint/types').UserConfig} */
export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',    // new features/sections
        'fix',     // bug fixes
        'content', // MDX/content changes
        'style',   // visual/CSS only changes
        'docs',    // documentation changes
        'chore'    // dependency updates, etc
      ],
    ],
  },
};