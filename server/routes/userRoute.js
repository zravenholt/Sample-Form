const express = require('express');
const User = require('../db/models/users.js');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    Contact
      .where(req.query)
      .fetchAll()
      .then((contacts) => {
        res.json({ contacts });
      });
  })
  .post((req, res) => {
    new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      streetAddress: req.body.streetAddress,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    })
      .save()
      .then((saved) => {
        res.json({saved});
      });
  });

router.route('/:id')
    .put((req, res) => {
      User
        .where('id', req.params.id)
        .fetch()
        .then((user) => {
          user.save({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
          })
          .then((saved) => {
            res.json({ saved });
          });
        });
    });

module.exports = router;