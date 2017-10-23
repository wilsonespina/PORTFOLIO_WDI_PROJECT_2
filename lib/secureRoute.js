function secureRoute(req, res, next) {
  if(!req.session.isAuthenticated || !req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('alert', 'You must be logged in');
      res.redirect('/login');
    });
  }

  return next();
}

module.exports = secureRoute;
