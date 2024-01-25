require('dotenv').config();
const nodemailer = require('nodemailer');
const { json } = require('sequelize');

const sendMailCom = async (req, res) => {
  const { args } = req.body;
  const tranporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SENDMAIL,
      pass: process.env.SENDPASS,
    },
  });

  const result = args.forEach((element) => {
    element;
  });

  const mailOption = {
    from: 'ssmaksss30@gmail.com',
    to: 'ssmaksss33@gmail.com',
    subject: 'Письмо node.js',
    html: `
    <h3>У вас новый заказ:</h3>
    <p> ${args[0]}</p>
    <p>На общую сумму: ${args[1]}</p>
    <p>Заказчик: ${args[2]}</p>
    <p>Номер телефона: ${args[3]}</p>
    <p>Адрес и служба доставки: ${args[4]}</p>`,
  };
  console.log(req.body);

  await tranporter.sendMail(mailOption);
};

module.exports = sendMailCom;
