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
        address: {
          line1: '2 Newport Pl',
          postcode: 'WC2H 7JJ'
        },
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/13/8d/8a/tokyo-diner.jpg',
        googleMap: 'https://www.google.co.uk/maps?q=tokyo+diner&um=1&ie=UTF-8&sa=X&ved=0ahUKEwj18ZHVrYbXAhVDSRoKHQ-GB7gQ_AUICigB',
        website: 'https://foursquare.com/v/tokyo-diner/4ac518d4f964a520bea720e3?openPhotoId=4fc24fb5e4b0117b73ec5aae',
        stars: 4,
        createdBy: users[0]
      },{
        name: 'Hare & Tortoise',
        location: 'Brunskwick Square, Bloomsbury',
        description: 'Simple Japanese diner serving sushi, bento, noodles and curries',
        address: {
          line1: '11-13 Brunswick Square',
          postcode: 'WC1N 1AF'
        },
        image: 'https://www.mybookingbox.co.uk/uploads/venue/resto/201511140548005142.jpg',
        googleMap: 'https://www.google.co.uk/maps/place/Hare+%26+Tortoise/@51.523999,-0.1252125,17z/data=!3m2!4b1!5s0x48761b30b69488d7:0x86afa0f0eae201c5!4m5!3m4!1s0x48761b30b38aa395:0xc681d5dde4ad8d04!8m2!3d51.523999!4d-0.1230185',
        website: 'http://www.hareandtortoise.co.uk/',
        stars: 4,
        createdBy: users[0]
      }]);
  })


  .then((meals) => console.log(`${meals.length} locations created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
