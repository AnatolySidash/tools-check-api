const signupRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { createUser } = require('../controllers/users');

signupRouter.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    id: Joi.string().required().min(8).max(8),
    password: Joi.string().required().min(6),
  }),
}), createUser);

module.exports = signupRouter;
