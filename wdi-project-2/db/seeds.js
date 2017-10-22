const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbUri } = require('../config/environment');
mongoose.connect(dbUri, { useMongoClient: true });

// Require the model
const Meal = require('../models/hotel');
const User = require('../models/user');
// Drop the model
Meal.collection.drop();
User.collection.drop();
// Create the models
User
  .create([{
    firstName: 'Dave',
    lastName: 'Hayden',
    username: 'mickyginger',
    email: 'mike.hayden@ga.co',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Meal
      .create([{
        name: 'Meal ibis London City',
        address: {
          line1: '5 Commercial Street',
          city: 'London',
          postcode: 'E1 6BF',
          country: 'UK'
        },
        image: 'https://www.ahstatic.com/photos/5011_ho_00_p_346x260.jpg',
        stars: 3,
        createdBy: users[0]
      },{
        name: 'Premier Inn London City',
        address: {
          line1: '66 Alie Street',
          city: 'London',
          postcode: 'E1 8PX',
          country: 'UK'
        },
        image: 'http://www.premierinn.com/content/dam/pi/websites/hotelimages/gb/en/L/LONALD/358x620xLondon,P20Aldgate,P2001.jpg.piimage.thumbnail.620.358.jpg.pagespeed.ic.ggMHI3f4MV.jpg',
        stars: 3,
        createdBy: users[0]
      }]);
  })


  .then((hotels) => console.log(`${hotels.length} hotels created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
