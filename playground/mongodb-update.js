const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server', err);
  }

  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //     _id: new ObjectID('588a585055649f070b86c156')
  // }, {
  //   $set: {
  //     text: 'Yo mato, everybody telling moto'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('588a8bee55649f070b86c426')
  }, {
    $set: {
      name: 'Lucas'
    },
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // db.close();
});
