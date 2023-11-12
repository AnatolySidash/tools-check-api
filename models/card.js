const mongoose = require('mongoose');
// const validator = require('validator');

const cardSchema = new mongoose.Schema({
  toolId: {
    type: String,
    required: [true, 'Поле "ID номер" должно быть заполнено'],
  },
  toolNameRU: {
    type: String,
    required: [true, 'Поле "Название" должно быть заполнено'],
  },
  toolNameEN: {
    type: String,
    required: [true, 'Поле "Название" должно быть заполнено'],
  },
  toolModel: {
    type: String,
  },
  toolManufacturer: {
    type: String,
  },
  toolRegisterNo: {
    type: String,
    required: [true, 'Поле "Регистрационный номер" должно быть заполнено'],
  },
  toolSerialNo: {
    type: String,
    required: [true, 'Поле "Серийный номер" должно быть заполнено'],
  },
  toolParameters: {
    type: String,
  },
  toolType: {
    type: String,
    required: [true, 'Поле "Тип СИ" должно быть заполнено'],
  },
  toolCheckDate: {
    type: Date,
  },
  toolCategory: {
    type: String,
    required: [true, 'Поле "Категория" должно быть заполнено'],
  },
  toolUsagePeriod: {
    type: String,
  },
  toolNextCheckDate: {
    type: Date,
  },
  toolRemainUsagePeriod: {
    type: Number,
  },
  toolCertificateNo: {
    type: String,
  },
  toolCondition: {
    type: String,
    required: [true, 'Поле "Текущее состояние" должно быть заполнено'],
  },
  toolCalibrationStatus: {
    type: String,
    required: [true, 'Поле "Статус поверки/калибровки" должно быть заполнено'],
  },
  toolCurrentLocation: {
    type: String,
  },
  toolUsageLocation: {
    type: String,
  },
  toolInstalledLocation: {
    type: String,
  },
  toolOwnerDept: {
    type: String,
    required: [true, 'Поле "Отвественный департамент" должно быть заполнено'],
  },
  toolOwnerSection: {
    type: String,
    required: [true, 'Поле "Отвественный отдел" должно быть заполнено'],
  },
  toolOwnerName: {
    type: String,
    required: [true, 'Поле "Отвественный сотрудник" должно быть заполнено'],
  },
  toolCheckCompany: {
    type: String,
  },
  comment: {
    type: String,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
