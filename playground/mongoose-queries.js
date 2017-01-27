const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = "588b5ac8cffb6a104d3e1a40";

if (ObjectID.isValid(id)) {
  Todo.find({
    _id: id
  }).then((todos) => {
    console.log('Todos', todos);
  }).catch((e) => console.log(e));

  Todo.findOne({
    _id: id
  }).then((todo) => {
    console.log('Todo', todo);
  }).catch((e) => console.log(e));

  Todo.findById(id).then((todo) => {
    if (!todo) {
      return console.log('Id not found');
    }
    console.log('Todo', todo);
  }).catch((e) => console.log(e));
}

var userId = "588aa09e8360811942d2cc9e";
if (ObjectID.isValid(userId)) {
  User.findById(userId).then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }

    console.log('User', user);
  }, (e) => console.log(e));
}
