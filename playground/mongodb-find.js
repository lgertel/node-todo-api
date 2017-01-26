const {MongoClient} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');
  var todos = db.collection('Todos').find({
    completed: false
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count:', count);
  }, (err) => {
    console.log('Unable to count collection', err);
  });

  db.collection('Users').find({
    name: 'Lucas'
  }).toArray().then((docs) => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to find Users', err);
  });

  db.close();
});
