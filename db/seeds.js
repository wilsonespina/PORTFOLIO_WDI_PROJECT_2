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
        name: 'Katsu Wraps',
        location: 'Petticoat Lane, Aldgate East',
        description: 'The katsu wraps are so moreish at this market stall. They\'re realy filling and always made in a speedy way. The best part about this is the interesting customer service from the woman who deals with taking money.',
        image: 'https://thecitylane.com/wp-content/uploads/2015/06/Katsu03.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.817131649463!2d-0.07517982680420232!3d51.51657085199001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb4968c0e5f%3A0xe48f833a083f50d7!2sKatsu+Wrap!5e0!3m2!1sen!2suk!4v1508924590355',
        stars: 5,
        createdBy: users[5],
        comments: [{
          content: 'One of my favourite lunches. Tasty and filling, for only £4.50! Tip: Just unwrap the paper a bit at a time so it doesn\'t fall apart!',
          createdBy: users[3],
          stars: 4
        },
        {
          content: 'Amazing place, Fastest service, Hummus makes the katsu wrap come to life. For the price, this is one of my favourite places in London',
          createdBy: users[1],
          stars: 5
        },
        {
          content: 'Love this place!',
          createdBy: users[4],
          stars: 5
        }]
      },{
        name: 'M&D Japanese',
        location: 'Depftford High Street',
        description: 'It\'s an unassuming Japanese restaurant in Deptford serving up an extensive menu of sushi, noodles and hot dishes.',
        image: 'https://intrepidbean.files.wordpress.com/2015/06/md3.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9939.721258977064!2d-0.0260776!3d51.4777934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5035fb7fe6920089!2sM+and+D+Japanese+Deptford!5e0!3m2!1sen!2suk!4v1508839845640',
        stars: 4,
        createdBy: users[0],
        comments: [{
          content: 'Cheap easy and fast, great little take away joint (not to mention it\'s pretty tasty) we go here when we want a fairly healthy takeaway and have the sushi and maybe some noodles/rice -- Katsu is pretty standard and the salmon teriyaki is pretty good',
          createdBy: users[5], stars: 4
        },
        {
          content: 'A nice little joint in Deptford that locals go to all the time.',
          createdBy: users[3], stars: 4
        },
        {
          content: 'Not a fan. I\'m not sure how clean the kitchen is.',
          createdBy: users[2], stars: 1
        }]
      },{
        name: 'Japanika',
        location: 'Tower Hamlets, Spitalfields',
        description: 'Forget Wagamama, Yo!, Wasabi etc! This place has the best Chicken Katsu curry in London! The staff are friendly and its a very good service. Even writing this review makes me want to go there tomorrow lunch time!',
        image: 'https://farm4.static.flickr.com/3132/5773144261_b44b43481f_b.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.6164634728298!2d-0.07609838422955319!3d51.52025207963719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cb5d5f4ea7f%3A0xd081826761436f6a!2sJapanika!5e0!3m2!1sen!2suk!4v1508839961787',
        stars: 5,
        createdBy: users[0],
        comments: [{
          content: 'Good spot for Lunch and a favourite in the area. Just your typical pre made elsewhere heated in-store fare (or packaged in the case of sushi).', createdBy: users[1], stars: 4 },
        { content: 'limited choice, But great for a quick and easy lunch. Food tastes fresh and rolls are made very well compared to other Japanese joints. Recommended if you need something quick, tastey and easy.', createdBy: users[5], stars: 3
        }]
      },{
        name: 'The Japanese Canteen',
        location: 'Bishopsgate',
        description: 'Used to be my favourite place to grab lunch when I was studying in central London. Chicken katsu with fresh spring onions and king prawns with sweet chili are great there! The prices are very cheap and the food quality is superb! It is all prepared fresh when you make an order, that is why whatever you have tastes great! The service is quick and efficient with no frills what so ever. Lots of spaces to eat. The portions are generous so you won\'t stay hungry..',
        image: 'https://junk4lunch.files.wordpress.com/2013/07/wpid-img_20130709_japanesecanteen2.jpg',
        googleMaps: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2482.8692793400655!2d-0.08036858422973489!3d51.51561417963646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sthe+japanese+canteen+bishopsgate!5e0!3m2!1sen!2suk!4v1508840321503',
        stars: 4,
        createdBy: users[4],
        comments: [{
          content: 'The place is a bit plain, but the food is fresh and tasty. At least it is called a canteen, but there cheaper canteens around.',
          createdBy: users[3], stars: 3
        },
        {
          content: 'Not fussed by this one.',
          createdBy: users[1], stars: 0
        },
        {
          content: 'Liked it very much. Lots of Korean stuff on menu which was welcome',
          createdBy: users[2], stars: 5
        }]
      }]);
  })


  .then((meals) => console.log(`${meals.length} locations created`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
