module.exports = {
  branches: [
    { name: 'main' },
    { name: 'release', prerelease: true }
  ],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    ['@semantic-release/git', {
      assets: ['CHANGELOG.md', 'package.json', '*.csproj'],
      message: 'chore(release): ${nextRelease.version} [skip ci]'
    }],
    '@semantic-release/github'
  ]
};

