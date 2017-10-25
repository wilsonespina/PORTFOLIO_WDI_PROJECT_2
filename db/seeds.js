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
  },
  {
    firstName: 'Sarah',
    lastName: 'Allen',
    email: 'sarahal@gmail.com',
    username: 'sarz',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Steve',
    lastName: 'Allen',
    email: 'steveal@gmail.com',
    username: 'stevey',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Philip',
    lastName: 'Bogort',
    email: 'phillyb@gmail.com',
    username: 'philb',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Mavis',
    lastName: 'Stephens',
    email: 'mstevey@gmail.com',
    username: 'maviss',
    password: 'password',
    passwordConfirmation: 'password'
  },
  {
    firstName: 'Mike',
    lastName: 'Salad',
    email: 'mislot@gmail.com',
    username: 'mikeysausage',
    password: 'password',
    passwordConfirmation: 'password'
  }])
  .then((users) => {
    console.log(`${users.length} users created`);
    return Meal
      .create([{
        name: 'Tokyo Diner',
        location: 'China Town, Soho',
        description: 'The portion sizes are good and if you are especially hungry, you can ask for extra rice at no additional cost. I usually go for the Katsu curry which is on par with every other Katsu curry I\'ve tried in the capital. It doesn\'t try to be something it\'s not - it\'s simple, tasty and filling. You are also provided complementary green tea and small corn snacks to eat whilst you wait for your mains (which can take a short while during busy times). The variety on the menu is good with different currys, dons, bento boxes, and sushi dishes on offer.',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/07/13/8d/8a/tokyo-diner.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.0742499945195!2d-0.13152908445416628!3d51.511853779635786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d278f6369d%3A0x3cb44bdffa6c1563!2sTokyo+Diner!5e0!3m2!1sen!2suk!4v1508836497189',
        stars: '4', //find average!!!
        createdBy: users[0],
        comments: [{
          content: 'Great atmosphere, their katsu curry is my jam.',
          createdBy: users[1],
          stars: 4
        },{
          content: ' I was looking for a place to eat after 11pm in Leicester square and this place had high reviews on zomato. We were not that hungry, so we ordered inari, tofu katsu ju and age dashi tofu. Everything was good but I loved Age Dashi. Very quick service, we were in and out in 30 minutes.',
          createdBy: users[2],
          stars: 4
        },{
          content: 'I had a the best katsu curry at this joint',
          createdBy: users[3],
          stars: 5
        },{
          content: 'I\'m a big fan and alway go here for dinner.',
          createdBy: users[5],
          stars: 3
        }]
      },{
        name: 'Hare & Tortoise',
        location: 'Brunskwick Square, Bloomsbury',
        description: 'I ordered the chicken Katsu curry (lovely on a cold day as it\'s very filling) and salmon sushi. The place gets very busy and so be ready to wait if you arrive at peak time. Overall great food. Service could have been better.',
        image: 'https://www.mybookingbox.co.uk/uploads/venue/resto/201511140548005142.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19864.59457714899!2d-0.1468499817681479!3d51.51185245595083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b30b38aa395%3A0xc681d5dde4ad8d04!2sHare+%26+Tortoise!5e0!3m2!1sen!2suk!4v1508836819778',
        stars: 4,
        createdBy: users[1],
        comments: [{
          content: 'Love this place',
          createdBy: users[2],
          stars: 3
        }, {
          content: 'Booking a reservation would be worth investing as Hare and Tortoise is typically full. Unlike your typical noodle bar the food takes just a minute longer than you\'d expect and despite being delicious the portions just weren\'t big enough to leave me satisfied.',
          createdBy: users[0], stars: 4
        }, {
          content: 'A very underrated gem, I loved eating here! The menu has a large selection, the price is very affordable and the portions are large. The food is very good! I am a big fan of the Katsu Curry! Finally, the service is excellent, very friendly and attentive. I eat here almost every month.',
          createdBy: users[5],
          stars: 5
        },
        {
          content: 'This Hare & Tortoise is always full of finance creeps in suits. I\'ve had better katsu curry before.',
          createdBy: users[4],
          stars: 1
        }]
      },{
        name: 'Misato',
        location: 'Wardour Street, Soho',
        description: 'Situated among the hundreds of restaurants in Chinatown, Misato has to fight for attention. But it succeeds. The presence of katsu curries (pork and chicken) captures our interest, while the price (£6.50!) draws us in and the flavour keeps us coming back.',
        image: 'http://chinatown.co.uk/wp-content/uploads/2016/08/misato0.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9932.516021930956!2d-0.1318974!3d51.5108492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3d087f530e2d323b!2sMisato!5e0!3m2!1sen!2suk!4v1508838744472',
        stars: 5,
        createdBy: users[5],
        comments: [{
          content: 'Love this place',
          createdBy: users[3],
          stars: 3
        },
        {
          content: 'Not reallt a fan',
          createdBy: users[1],
          stars: 2
        },
        {
          content: 'Not reallt a fan',
          createdBy: users[2],
          stars: 2
        },
        {
          content: 'this is soooo nice',
          createdBy: users[4],
          stars: 3
        }]
      },{
        name: 'M&D Japanese',
        location: 'Depftford High Street',
        description: 'Unassuming Japanese restaurant in Deptford serving up an extensive menu of sushi, noodles and hot dishes.',
        image: 'https://intrepidbean.files.wordpress.com/2015/06/md3.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9939.721258977064!2d-0.0260776!3d51.4777934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5035fb7fe6920089!2sM+and+D+Japanese+Deptford!5e0!3m2!1sen!2suk!4v1508839845640',
        stars: 4,
        createdBy: users[0],
        comments: [{
          content: 'Love this place',
          createdBy: users[5], stars: 3
        },
        {
          content: 'this is soooo nice',
          createdBy: users[3], stars: 2
        },
        {
          content: 'this is soooo nice',
          createdBy: users[2], stars: 3
        }]
      },{
        name: 'Japanika',
        location: 'Tower Hamlets, Spitalfields',
        description: 'Minuscule Japanese fast food restaurant with contemporary decor including a miniature zen garden.',
        image: 'https://farm4.static.flickr.com/3132/5773144261_b44b43481f_b.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6164634728298!2d-0.07609838422955319!3d51.52025207963719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb5d5f4ea7f%3A0xd081826761436f6a!2sJapanika!5e0!3m2!1sen!2suk!4v1508839961787',
        stars: 4,
        createdBy: users[0],
        comments: [{
          content: 'Love this place', createdBy: users[0], stars: 3 },
        { content: 'this is soooo nice', createdBy: users[2], stars: 3
        }]
      },{
        name: 'The Japanese Canteen',
        location: 'Bishopsgate',
        description: 'Shared tables and an uncluttered vibe are the hallmarks of this Japanese hot- and cold-food chain.',
        image: 'https://junk4lunch.files.wordpress.com/2013/07/wpid-img_20130709_japanesecanteen2.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2482.8692793400655!2d-0.08036858422973489!3d51.51561417963646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sthe+japanese+canteen+bishopsgate!5e0!3m2!1sen!2suk!4v1508840321503',
        stars: 4,
        createdBy: users[4],
        comments: [{
          content: 'Love this place',
          createdBy: users[0], stars: 3
        },
        {
          content: 'this is soooo nice',
          createdBy: users[1], stars: 0
        },
        {
          content: 'this is soooo nice',
          createdBy: users[2], stars: 2
        }]
      }]);
  })


  .then((meals) => console.log(`${meals.length} locations created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
