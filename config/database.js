const mongoose = require('mongoose');
/// is this supposed to be changed to mongoose.connect(process.env.DATABASE_URL, {}) ?? see connecting atlas lesson
// mongoose.connect('mongodb://localhost/stores', {
//   useNewUrlParser: true, 
//   useCreateIndex: true, 
//   useUnifiedTopology: true
// });

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
