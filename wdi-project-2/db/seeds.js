const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
mongoose.connect(dbUri, { useMongoClient: true });

// Require the model
const Meal = require('../models/meal');
const User = require('../models/user');

// Drop the model
Meal.collection.drop();
User.collection.drop();

// Create the models
User
  .create([{
    firstName: 'David',
    lastName: 'Rodigan',
    username: 'daverods',
    email: 'davidrods@gmail.com',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Meal
      .create([{
        location: 'TEST',
        address: {
          line1: '',
          city: 'London',
          postcode: '',
          country: 'UK'
        },
        image: '',
        stars: 3,
        createdBy: users[0]
      },{
        location: '',
        address: {
          line1: '',
          city: 'London',
          postcode: '',
          country: 'UK'
        },
        image: '',
        stars: 4,
        createdBy: users[0]
      }]);
  })


  .then((hotels) => console.log(`${hotels.length} hotels created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
