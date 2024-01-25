const Router = require('express');
const basketDeviceController = require('../constrolles/BasketDeviceController');

const router = new Router();

router.post('/', basketDeviceController.create);
router.get('/', basketDeviceController.getAll);

module.exports = router;
