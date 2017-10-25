const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  stars: Number
}, {
  timestamps: true
});

commentSchema.methods.belongsTo = function commentsBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

const mealSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  description: String,
  image: { type: String, required: true },
  googleMaps: String,
  stars: { type: Number, default: 0 },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [ commentSchema ]
});

mealSchema.methods.belongsTo = function mealBelongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

mealSchema.pre('save', function(next) {
  if (!this.isModified('stars')) return next();
  const array = this.comments;
  const newArray = [];

  for (var i = 0; i < array.length; i++) {
    const rating = array[i].stars;
    newArray.push(rating);
  }
  const result = newArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  });

  this.stars = Math.ceil(result / array.length);
  next();
});

module.exports = mongoose.model('Meal', mealSchema);
