const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/bobateas', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});
