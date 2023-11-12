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
    toolModel: Joi.string().allow(''),
    toolManufacturer: Joi.string().allow(''),
    toolSerialNo: Joi.string().required(),
    toolRegisterNo: Joi.string().required(),
    toolParameters: Joi.string().allow(''),
    toolType: Joi.string().required(),
    toolCheckDate: Joi.date().allow(''),
    toolCategory: Joi.string().required(),
    toolNextCheckDate: Joi.date().allow(''),
    toolUsagePeriod: Joi.string().allow(''),
    toolRemainUsagePeriod: Joi.number().allow(''),
    toolCertificateNo: Joi.string().allow(''),
    toolCondition: Joi.string().required(),
    toolCalibrationStatus: Joi.string().required(),
    toolCurrentLocation: Joi.string().allow(''),
    toolUsageLocation: Joi.string().allow(''),
    toolInstalledLocation: Joi.string().allow(''),
    toolOwnerDept: Joi.string().required(),
    toolOwnerSection: Joi.string().required(),
    toolOwnerName: Joi.string().required(),
    toolCheckCompany: Joi.string().allow(''),
    comment: Joi.string().allow(''),
  }),
}), addTool);

toolRouter.patch('/:_id', celebrate({
  body: Joi.object().keys({
    toolId: Joi.string().required(),
    toolNameRU: Joi.string().required(),
    toolNameEN: Joi.string().required(),
    toolModel: Joi.string().allow(''),
    toolManufacturer: Joi.string().allow(''),
    toolSerialNo: Joi.string().required(),
    toolRegisterNo: Joi.string().required(),
    toolParameters: Joi.string().allow(''),
    toolType: Joi.string().required(),
    toolCheckDate: Joi.date().allow(''),
    toolCategory: Joi.string().required(),
    toolNextCheckDate: Joi.date().allow(''),
    toolUsagePeriod: Joi.string().allow(''),
    toolRemainUsagePeriod: Joi.number().allow(''),
    toolCertificateNo: Joi.string().allow(''),
    toolCondition: Joi.string().required(),
    toolCalibrationStatus: Joi.string().required(),
    toolCurrentLocation: Joi.string().allow(''),
    toolUsageLocation: Joi.string().allow(''),
    toolInstalledLocation: Joi.string().allow(''),
    toolOwnerDept: Joi.string().required(),
    toolOwnerSection: Joi.string().required(),
    toolOwnerName: Joi.string().required(),
    toolCheckCompany: Joi.string().allow(''),
    comment: Joi.string().allow(''),
  }),
}), editToolCard);

toolRouter.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex().required(),
  }),
}), deleteTool);

module.exports = toolRouter;
