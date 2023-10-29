/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
// const validator = require('validator');
const bcrypt = require('bcryptjs');
const NotAuthorizedRequestError = require('../errors/not-authorized-request-error');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, 'Минимальная длина поля "name" - 2 символа'],
    maxlength: [30, 'Максимальная длина поля "name" - 30 символов'],
    required: [true, 'Поле "Имя" должно быть быть заполнено'],
  },
  id: {
    type: String,
    minlength: [8, 'Длина поля "ID номер" - 8 символов'],
    maxlength: [8, 'Длина поля "ID номер" - 8 символов'],
    required: [true, 'Поле "ID номер" должно быть быть заполнено'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Поле "Пароль" должно быть быть заполнено'],
    select: false,
  },
}, { versionKey: false });

// eslint-disable-next-line
userSchema.statics.findUserByCredentials = function (id, password) {
  return this.findOne({ id }).select('+password')
    .then((user) => {
      if (!user) {
        throw new NotAuthorizedRequestError('Неправильные ID номер или пароль');
      }

      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            throw new NotAuthorizedRequestError('Неправильные ID номер или пароль');
          }
          return user;
        });
    });
};

module.exports = mongoose.model('user', userSchema);
