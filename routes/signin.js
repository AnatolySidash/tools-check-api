const signinRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const { login } = require('../controllers/users');

signinRouter.post('/', celebrate({
  body: Joi.object().keys({
    id: Joi.string().required().min(8).max(8),
    password: Joi.string().required().min(6),
  }).unknown(true),
}), login);

module.exports = signinRouter;
