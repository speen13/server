const { Basket } = require('../models/models');

class basketController {
  async create(req, res) {
    const { id } = req.body;
    const basket = await Basket.create({ id });
    return res.json(basket);
  }
  async getAll(req, res) {
    const baskets = await Basket.findAll();
    return res.json(baskets);
  }
}

module.exports = new basketController();
