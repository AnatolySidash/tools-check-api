/* eslint-disable linebreak-style */
const toolRouter = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getTools, addTool, deleteTool, editToolCard,
} = require('../controllers/tools');

toolRouter.get('/', getTools);

toolRouter.post('/', celebrate({
  body: Joi.object().keys({
    toolId: Joi.string().required(),
    toolNameRU: Joi.string().required(),
    toolNameEN: Joi.string().required(),
    toolManufacturer: Joi.string().required(),
    toolSerialNo: Joi.string().required(),
    toolRegisterNo: Joi.string().required(),
    toolParameters: Joi.string(),
    toolReceiveDate: Joi.date().required(),
    toolCheckDate: Joi.date().required(),
    toolReadyDate: Joi.date().required(),
    toolReleaseDate: Joi.string(),
    toolNextCheckDate: Joi.date().required(),
    toolUsagePeriod: Joi.string().required(),
    toolCertificateNo: Joi.string(),
    toolCondition: Joi.string().required(),
    toolCurrentLocation: Joi.string(),
    toolUsageLocation: Joi.string(),
    toolOwnerDept: Joi.string().required(),
    toolOwnerName: Joi.string().required(),
    toolCheckCompany: Joi.string(),
    toolCheckCost: Joi.string(),
    toolAvailability: Joi.boolean(),
    toolWorkability: Joi.boolean(),
    toolDocAvailability: Joi.boolean(),
    comment: Joi.string(),
  }),
}), addTool);

toolRouter.patch('/:_id', celebrate({
  body: Joi.object().keys({
    toolId: Joi.string().required(),
    toolNameRU: Joi.string().required(),
    toolNameEN: Joi.string().required(),
    toolManufacturer: Joi.string().required(),
    toolSerialNo: Joi.string().required(),
    toolRegisterNo: Joi.string().required(),
    toolParameters: Joi.string(),
    toolReceiveDate: Joi.date().required(),
    toolCheckDate: Joi.date().required(),
    toolReadyDate: Joi.date().required(),
    toolReleaseDate: Joi.string(),
    toolNextCheckDate: Joi.date().required(),
    toolUsagePeriod: Joi.string().required(),
    toolCertificateNo: Joi.string(),
    toolCondition: Joi.string().required(),
    toolCurrentLocation: Joi.string(),
    toolUsageLocation: Joi.string(),
    toolOwnerDept: Joi.string().required(),
    toolOwnerName: Joi.string().required(),
    toolCheckCompany: Joi.string(),
    toolCheckCost: Joi.string(),
    toolAvailability: Joi.boolean(),
    toolWorkability: Joi.boolean(),
    toolDocAvailability: Joi.boolean(),
    comment: Joi.string(),
  }),
}), editToolCard);

toolRouter.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
}), deleteTool);

module.exports = toolRouter;
