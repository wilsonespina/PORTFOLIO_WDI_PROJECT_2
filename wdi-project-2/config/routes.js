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
  .post(secureRoute, mealsController.create);

router.route('/meals/new') //WORKING????
  .get(secureRoute, mealsController.new);

router.route('/meals/:id')
  .get(mealsController.show)
  .put(secureRoute, mealsController.update)
  .delete(secureRoute, mealsController.delete);

router.route('/meals/:id/edit')
  .get(secureRoute, mealsController.edit);

router.route('/register')
  .get(registrationsController.new)
  .post(registrationsController.create);

router.route('/login')
  .get(sessionsController.new)
  .post(sessionsController.create);

router.route('/logout')
  .get(sessionsController.delete);

//COMMENTS
router.route('/meals/:id/comments')
  .post(secureRoute, mealsController.createComment);
//DELETE COMMENTS
router.route('/meals/:id/comments/:commentId')
  .delete(secureRoute, mealsController.deleteComment);

router.all('*', (req, res) => res.notFound());

module.exports = router;
