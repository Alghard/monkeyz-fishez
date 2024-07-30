const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

const userCtrl = require('../controllers/user');

router.post('/signup',
  [
    check('username').isLength({ min: 3 }).withMessage('Le nom d\'utilisateur doit comporter au moins 3 caractères'),
    check('email').isEmail().withMessage('Veuillez fournir une adresse email valide'),
    check('password').isLength({ min: 6 }).withMessage('Le mot de passe doit comporter au moins 6 caractères')
  ],
  userCtrl.signup);

router.post('/login',
  [
    check('email').isEmail().withMessage('Veuillez fournir une adresse email valide'),
    check('password').not().isEmpty().withMessage('Le mot de passe ne peut pas être vide')
  ],
  userCtrl.login);


module.exports = router;