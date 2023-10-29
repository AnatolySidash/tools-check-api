/* eslint-disable linebreak-style */
const {
  OK_STATUS_CODE,
  CREATED_STATUS_CODE,
} = require('../utils/errors');

const Card = require('../models/card');

const NotFoundError = require('../errors/not-found-error');
const BadRequestError = require('../errors/bad-request-error');
const ForbiddenError = require('../errors/forbidden-error');
const ConflictRequestError = require('../errors/conflict-request-error');

module.exports.getTools = (req, res, next) => {
  Card.find(req.params._id)
    .then((card) => res
      .status(OK_STATUS_CODE).send(card))
    .catch((err) => {
      next(err);
    });
};

module.exports.addTool = (req, res, next) => {
  const {
    toolId,
    toolNameRU,
    toolNameEN,
    toolManufacturer,
    toolSerialNo,
    toolRegisterNo,
    toolParameters,
    toolReceiveDate,
    toolCheckDate,
    toolReadyDate,
    toolReleaseDate,
    toolUsagePeriod,
    toolNextCheckDate,
    toolCertificateNo,
    toolCondition,
    toolCurrentLocation,
    toolUsageLocation,
    toolOwnerDept,
    toolOwnerName,
    toolCheckCompany,
    toolCheckCost,
    toolAvailability,
    toolWorkability,
    toolDocAvailability,
    comment,
  } = req.body;

  Card.create({
    toolId,
    toolNameRU,
    toolNameEN,
    toolManufacturer,
    toolSerialNo,
    toolRegisterNo,
    toolParameters,
    toolReceiveDate,
    toolCheckDate,
    toolReadyDate,
    toolReleaseDate,
    toolUsagePeriod,
    toolNextCheckDate,
    toolCertificateNo,
    toolCondition,
    toolCurrentLocation,
    toolUsageLocation,
    toolOwnerDept,
    toolOwnerName,
    toolCheckCompany,
    toolCheckCost,
    toolAvailability,
    toolWorkability,
    toolDocAvailability,
    comment,
    owner: req.user.payload._id,
  })
    .then((card) => res
      .status(CREATED_STATUS_CODE).send(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные для добавления оборудования'));
      } else {
        next(err);
      }
    });
};

module.exports.editToolCard = (req, res, next) => {
  const {
    toolId,
    toolNameRU,
    toolNameEN,
    toolManufacturer,
    toolSerialNo,
    toolRegisterNo,
    toolParameters,
    toolReceiveDate,
    toolCheckDate,
    toolReadyDate,
    toolReleaseDate,
    toolUsagePeriod,
    toolNextCheckDate,
    toolCertificateNo,
    toolCondition,
    toolCurrentLocation,
    toolUsageLocation,
    toolOwnerDept,
    toolOwnerName,
    toolCheckCompany,
    toolCheckCost,
    toolAvailability,
    toolWorkability,
    toolDocAvailability,
    comment,
  } = req.body;

  Card.findByIdAndUpdate(req.params._id, {
    toolId,
    toolNameRU,
    toolNameEN,
    toolManufacturer,
    toolSerialNo,
    toolRegisterNo,
    toolParameters,
    toolReceiveDate,
    toolCheckDate,
    toolReadyDate,
    toolReleaseDate,
    toolUsagePeriod,
    toolNextCheckDate,
    toolCertificateNo,
    toolCondition,
    toolCurrentLocation,
    toolUsageLocation,
    toolOwnerDept,
    toolOwnerName,
    toolCheckCompany,
    toolCheckCost,
    toolAvailability,
    toolWorkability,
    toolDocAvailability,
    comment,
  }, { new: true, runValidators: true })
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Оборудование по указанному id не найдено.');
      }
      res.status(OK_STATUS_CODE).send({ data: card });
    })
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictRequestError('Оборудование с таким id уже зарегистрировано.'));
        return;
      }
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные оборудования'));
      } else {
        next(err);
      }
    });
};

module.exports.deleteTool = (req, res, next) => {
  Card.findById(req.params._id)
    .then((card) => {
      if (!card) {
        throw new NotFoundError('Оборудование по указанному id не найдено.');
      }
      if (String(card.owner) === String(req.user.payload._id)) {
        Card.deleteOne(card).then(() => res
          .status(OK_STATUS_CODE).send(card))
          .catch((err) => {
            next(err);
          });
      }
      if (String(card.owner) !== String(req.user.payload._id)) {
        throw new ForbiddenError('Доступ запрещён');
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные оборудования'));
      } else {
        next(err);
      }
    });
};
