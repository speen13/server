const Router = require('express');
const TypeController = require('../constrolles/typeController');
const checkRole = require('../middleware/checkRoleMiddleware');

const router = new Router();

router.post('/', checkRole('ADMIN'), TypeController.create);
router.get('/', TypeController.getAll);

module.exports = router;
