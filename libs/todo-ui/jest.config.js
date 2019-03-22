module.exports = {
  name: 'todo-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/todo-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
