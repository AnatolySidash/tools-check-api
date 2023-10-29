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
  toolManufacturer: {
    type: String,
    required: [true, 'Поле "Производитель" должно быть заполнено'],
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
  toolReceiveDate: {
    type: Date,
    required: [true, 'Поле "Дата приёмки" должно быть заполнено'],
  },
  toolCheckDate: {
    type: Date,
    required: [true, 'Поле "Дата калибровки/поверки" должно быть заполнено'],
  },
  toolReadyDate: {
    type: Date,
    required: [true, 'Поле "Дата готовности" должно быть заполнено'],
  },
  toolReleaseDate: {
    type: String,
  },
  toolUsagePeriod: {
    type: String,
    required: [true, 'Поле "МПИ" должно быть заполнено'],
  },
  toolNextCheckDate: {
    type: Date,
    required: [true, 'Поле "Дата следующей калибровки/поверки" должно быть заполнено'],
  },
  toolCertificateNo: {
    type: String,
  },
  toolCondition: {
    type: String,
    required: [true, 'Поле "Текущее состояние" должно быть заполнено'],
  },
  toolCurrentLocation: {
    type: String,
  },
  toolUsageLocation: {
    type: String,
  },
  toolOwnerDept: {
    type: String,
    required: [true, 'Поле "Отвественный департамент" должно быть заполнено'],
  },
  toolOwnerName: {
    type: String,
    required: [true, 'Поле "Отвественный сотрудник" должно быть заполнено'],
  },
  toolCheckCompany: {
    type: String,
  },
  toolCheckCost: {
    type: String,
  },
  toolAvailability: {
    type: Boolean,
  },
  toolWorkability: {
    type: Boolean,
  },
  toolDocAvailability: {
    type: Boolean,
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
