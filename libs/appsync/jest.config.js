module.exports = {
  name: 'appsync',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/appsync',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
