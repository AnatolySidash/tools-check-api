require('dotenv').config();
const express = require('express');

const { PORT = 3000, DB_URL = 'mongodb://127.0.0.1:27017/tooldb' } = process.env;
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { errors } = require('celebrate');

const app = express();
const { requestLogger, errorLogger } = require('./middlewares/logger');
const userRouter = require('./routes/users');
const toolRouter = require('./routes/tools');
const signinRouter = require('./routes/signin');
const signupRouter = require('./routes/signup');
const signoutRouter = require('./routes/signout');
const { errorHandler } = require('./middlewares/errorHandler');
const { auth } = require('./middlewares/auth');
const NotFoundError = require('./errors/not-found-error');

app.use(cors({
  origin: ['http://localhost:3001'],
  credentials: true,
  maxAge: 30,
}));

app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger);

app.use('/users', auth, userRouter);
app.use('/tools', auth, toolRouter);
app.use('/signup', signupRouter);
app.use('/signin', signinRouter);
app.use('/signout', signoutRouter);

app.use('*', auth, (req, res, next) => {
  next(new NotFoundError('Страница не найдена'));
});

app.use(errorLogger);

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
});

app.use(errors());

app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Приложение запущено на порте ${PORT}`);
});
