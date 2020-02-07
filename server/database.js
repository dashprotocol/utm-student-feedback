/* eslint-disable func-names */
const mongoose = require('mongoose');

mongoose.connect('mongodb://172.17.0.2/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const ReviewSchema = mongoose.Schema({
  content: String,
  rating: Number,
  created: Date,
  modified: Date,
  user: String,
  avatar: String,
  response: {
    content: String,
    created: Date,
    modified: Date,
    user: String,
    avatar: String,
  },
});

const Review = mongoose.model('Review', ReviewSchema);

const getData = function (callback) {
  Review.find().exec((err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  mongoose,
  ReviewSchema,
  Review,
  getData,
};
