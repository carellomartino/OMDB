const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models');
const router = express.Router();


function isLogedIn(req, res, next) { 
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login');
    }
  }
  
  function isLoged(req, res, next) { 
    if (req.isAuthenticated()) {
      res.redirect('/');
    } else {
      next();
    }
  }

  router.get('/login', isLoged, (req, res) => {
    res.send(console.log("llego a login"))
  });



module.exports = router;