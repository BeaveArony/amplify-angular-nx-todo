module.exports = {
  name: 'second-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/second-app/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
