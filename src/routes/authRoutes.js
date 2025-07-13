const express = require('express');
const authRouter = express.Router();

const authController = require('../controllers/authController');
const {auth, isAdmin}= require('../middlewares/authMiddllewares');



authRouter.post('/register', authController.register);
authRouter.post('/login', authController.login);


authRouter.get('/admin', auth, isAdmin, (req, res) => {
  res.send('Welcome Admin!');
});

module.exports = authRouter;