const User = require('../models/user');

function registrationsNew(req, res) {
  res.render('registrations/new');
}

function registrationsCreate(req, res){
  console.log(req.body);
  User
    .create(req.body)
    .then((user) => {
      req.flash('info', `Thanks for registering, ${user.username}! Please login`);
      res.redirect('/login');
      console.log(user);
    })
    .catch((err) => {
      console.log(err)
      if (err.name === 'ValidationError') {
        return res.status(400).render('registrations/new', { message: 'Passwords do not match' });
      }
      // next(err);
      res.status(500).end();
    });

}


module.exports = {
  new: registrationsNew,
  create: registrationsCreate
};
