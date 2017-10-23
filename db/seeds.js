const mongoose = require('mongoose');
const { dbUri } = require('../config/environment');
mongoose.Promise = require('bluebird');
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
    email: 'davidrods@gmail.com',
    username: 'daverods',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Meal
      .create([{
        name: 'Tokyo Diner',
        location: 'China Town, Soho',
        description: 'Simple Japanese diner serving sushi, bento, noodles and curries',
        // address: {
        //   line1: '2 Newport Pl',
        //   postcode: 'WC2H 7JJ'
        // },
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/13/8d/8a/tokyo-diner.jpg',
        stars: 4,
        createdBy: users[0]
      },{
        name: 'Hare & Tortoise',
        location: 'Brunskwick Square, Bloomsbury',
        description: 'Simple Japanese diner serving sushi, bento, noodles and curries',
        // address: {
        //   line1: '11-13 Brunswick Square',
        //   postcode: 'WC1N 1AF'
        // },
        image: 'https://www.mybookingbox.co.uk/uploads/venue/resto/201511140548005142.jpg',
        stars: 4,
        createdBy: users[0]
      }]);
  })


  .then((meals) => console.log(`${meals.length} locations created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
