const { Device } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid');
const path = require('path');
class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;

      let fileName = `${uuid.v4()}.jpeg`;
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
  async getALL(req, res) {
    let { brandId, typeId, page, limit } = req.query;
    limit = limit || 9;
    page = page || 1;
    let offset = page * limit - limit;
    let devices;
    if (!brandId && !typeId) {
      devices = await Device.findAll({ limit, offset });
    }
    if (brandId && !typeId) {
      devices = await Device.findAll({ where: { brandId }, limit, offset });
    }
    if (!brandId && typeId) {
      devices = await Device.findAll({ where: { typeId }, limit, offset });
    }
    if (brandId && typeId) {
      devices = await Device.findAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }
    return res.json(devices);
  }
  async getOne(req, res) {
    const { deviceId } = req.query;
    if (!deviceId) {
      return next(ApiError.badRequest('Id does not exist'));
    }
    const device = Device.findAll({
      where: {
        id: deviceId,
      },
    });
    return res.json(device);
  }
}

module.exports = new DeviceController();
