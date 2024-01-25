const Router = require('express');
const basketController = require('../constrolles/BasketController');

const router = new Router();

router.post('/', basketController.create);
router.get('/', basketController.getAll);

module.exports = router;
