const Meal = require('../models/meal');

function indexRoute(req, res, next) {
  Meal
    .find()
    .populate('createdBy')
    .exec()
    .then((meals) => {
      const array = meals;
      console.log(array);
      // const newArray = [];
      // for (var i = 0; i < array.length; i++) {
      //   const rating = array[i].stars;
      //   newArray.push(rating);
      // }
      // const result = newArray.reduce(function(accumulator, currentValue) {
      //   return accumulator + currentValue;
      // });
      // const avgRating = Math.ceil(result / array.length);
      res.render('meals/index', { meals } );
    })
    .catch(next);
}

function newRoute(req, res) {
  return res.render('meals/new');
}

function createRoute(req, res, next) {

  req.body.createdBy = req.user;

  Meal
    .create(req.body)
    .then((meal) => {
      console.log(req.body);
      console.log(meal);
      res.redirect('/meals');
    })
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/meals/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function showRoute(req, res, next) {
  Meal
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((meal) => {
      const array = meal.comments;
      console.log(array);
      const newArray = [];
      for (var i = 0; i < array.length; i++) {
        const rating = array[i].stars;
        newArray.push(rating);
      }
      const result = newArray.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      });
      const avgRating = Math.ceil(result / array.length);
      if(!meal) return res.notFound();
      return res.render('meals/show', { meal, avgRating } );
    })
    .catch(next);
}

function editRoute(req, res, next) {

  Meal
    .findById(req.params.id)
    .exec()
    .then((meal) => {
      if(!meal) return res.redirect();
      if(!meal.belongsTo(req.user)) return res.unauthorized(`/meals/${meal.id}`, 'You do not have permission to edit that resource');
      return res.render('meals/edit', { meal });
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Meal
    .findById(req.params.id)
    .exec()
    .then((meal) => {
      if(!meal) return res.notFound();
      if(!meal.belongsTo(req.user)) return res.unauthorized(`/meals/${meal.id}`, 'You do not have permission to edit that resource');
      for(const field in req.body) {
        meal[field] = req.body[field];
      }
      return meal.save();
    })
    .then((meal) => res.redirect(`/meals/${meal.id}`))
    .catch((err) => {
      if(err.name === 'ValidationError') return res.badRequest(`/meals/${req.params.id}/edit`, err.toString());
      next(err);
    });
}

function deleteRoute(req, res, next) {
  Meal
    .findById(req.params.id)
    .exec()
    .then((meal) => {
      if(!meal) return res.notFound();
      if(!meal.belongsTo(req.user)) return res.unauthorized(`/meals/${meal.id}`, 'You do not have permission to edit that resource');
      return meal.remove();
    })
    .then(() => res.redirect('/meals'))
    .catch(next);
}


function createCommentRoute(req, res, next) {

  req.body.createdBy = req.user;

  Meal
    .findById(req.params.id)
    .exec()
    .then((meal) => {
      if(!meal) return res.notFound();
      req.body.createdBy = req.user;
      meal.comments.push(req.body);
      return meal.save();
    })
    .then((meal) => res.redirect(`/meals/${meal.id}`))
    .catch(next);
}

function deleteCommentRoute(req, res, next) {
  Meal
    .findById(req.params.id)
    .exec()
    .then((meal) => {
      if(!meal) return res.notFound();
      const comment = meal.comments.id(req.params.commentId);
      comment.remove();

      return meal.save();
    })
    .then((meal) => res.redirect(`/meals/${meal.id}`))
    .catch(next);
}


module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  createComment: createCommentRoute,
  deleteComment: deleteCommentRoute

};
