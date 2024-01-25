const { BasketDevice } = require('../models/models');

class basketDeviceController {
  async create(req, res) {
    const { id } = req.body;
    const basket = await BasketDevice.create({ id });
    return res.json(basket);
  }
  async getAll(req, res) {
    const baskets = await BasketDevice.findAll();
    return res.json(baskets);
  }
}

module.exports = new basketDeviceController();
