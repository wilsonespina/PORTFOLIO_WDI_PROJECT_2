const express                 = require('express');
const router                  = express.Router();
const registrationsController = require('../controllers/registrations');
const mealsController         = require('../controllers/meals');
const sessionsController      = require('../controllers/sessions');
const secureRoute             = require('../lib/secureRoute');



// HOMEPAGE
router.get('/', (req, res) => res.render('statics/homepage'));

router.route('/meals') //WORKING
  .get(mealsController.index)
  .post(mealsController.create);
  // .post(secureRoute, mealsController.create);

router.route('/meals/new') //WORKING????
  .get(mealsController.new);
  // .get(secureRoute, mealsController.new);

router.route('/meals/:id') //WORKING
  .get(mealsController.show)
  .put(mealsController.update)
  .delete(mealsController.delete);
  // .put(secureRoute, mealsController.update)
  // .delete(secureRoute, mealsController.delete);

router.route('/meals/:id/edit') //CANT LOGIN
  .get(mealsController.edit);
  // .get(secureRoute, mealsController.edit);

router.route('/register') //WORKING!!
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login') //WORKINF
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

//COMMENTS
router.route('/meals/:id/comments')
  .post(mealsController.createComment);
  // .post(secureRoute, mealsController.createComment);

//DELETE COMMENTS
router.route('/meals/:id/comments/:commentId')
  .delete(mealsController.deleteComment);
  // .delete(secureRoute, mealsController.deleteComment);

router.all('*', (req, res) => res.notFound());

module.exports = router;
