const { req, res } = require('express');
const mongoose = require('mongoose');
const signUpCopy = mongoose.model('signUpTable');

module.exports = (app) => {
  app.post(`/api/signUp`,  (req, res) => {
    const signedUpUser = new signUpCopy({
      email:req.body.email
    })
    signedUpUser.save()
    .then(data =>{
      res.json(data)
    })
    .catch(error =>{
      res.json(error)
    }) 
  });
};
