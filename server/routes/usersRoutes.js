const { request, response } = require('express');
const mongoose = require('mongoose');
const signUpCopy = mongoose.model('signUp');

module.exports = (app) => {
 /*  app.get(`/api/signUp`, async (req, res) => {
    const persons = await signUp.find();
    return res.status(200).send(persons);
  }); */

  app.post(`/api/signUp`,  (req, res) => {
    const signedUpUser = new signUpCopy({
      email:request.body.email
    })
    signedUpUser.save()
    .then(data =>{
      response.json(data)
    })
    .catch(error =>{
      response.json(error)
    }) 
    /* return res.status(201).send({
      error: false,
      signUp,
    }); */
  });

 /*  app.put(`/api/signUp/:id`, async (req, res) => {
    const { id } = req.params;

    const signUp = await signUp.findByIdAndUpdate(id, req.body);

    return res.status(202).send({
      error: false,
      user,
    });
  }); */

  /* app.delete(`/api/signUp/:id`, async (req, res) => {
    const { id } = req.params;

    const signUp = await signUp.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      user,
    }); */
  // });
};
