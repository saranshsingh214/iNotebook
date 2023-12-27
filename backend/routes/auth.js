const express = require('express')
const User = require('../models/user')
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Create a user using POST "/api/auth", doesn't require authentication

router.post('/',[
    body('name','Enter a valid name').isLength({ min: 3 }),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be at least 5 charaters').isLength({ min: 5 }),

] ,(req, res) =>{
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    }).then(user => res.json(user))
    .catch(err => {console.log(err)
    res.json({error : 'Please enter a valid email address', message : err.message})})
})

module.exports = router