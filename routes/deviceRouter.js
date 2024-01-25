const Router = require('express');
const DeviceController = require('../constrolles/deviceController');

const router = new Router();

router.post('/', DeviceController.create);
router.get('/', DeviceController.getAll);
router.get('/:id', DeviceController.getOne);

module.exports = router;
