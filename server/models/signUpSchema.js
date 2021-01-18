const mongoose = require('mongoose');
const { Schema } = mongoose;

const signUpSchema = new Schema({
  email: String,
  date: Date
});

mongoose.model('signUp', signUpSchema);
