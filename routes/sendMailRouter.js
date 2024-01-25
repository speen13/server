const Router = require('express');
const sendMailCom = require('../constrolles/sendMailController');

const router = new Router();





router.post('/',  sendMailCom);
// router.get('/', TypeController.getAll);

module.exports = router;
