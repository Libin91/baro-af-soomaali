const mongoose = require('mongoose');
const { Schema } = mongoose;

const signUpSchema = new Schema({
  email:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

mongoose.model('signUpTable', signUpSchema);
