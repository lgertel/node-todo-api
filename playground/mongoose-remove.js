const {ObjectID} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findAndRemove().then((todo) => {});
Todo.findByIdAndRemove('588b7e812c8a0f1ea60b1a2b').then((todo) => {
  console.log(todo);
});

Todo.findOneAndRemove({_id: '588b7e812c8a0f1ea60b1a2b'}).then((todo) => {
  console.log(todo);
});
