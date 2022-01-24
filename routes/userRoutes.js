const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protectRoute,
  authController.updatePassword
);

router.get(
  '/me',
  authController.protectRoute,
  userController.getMe,
  userController.getUser
);

router.patch('/updateMe', authController.protectRoute, userController.updateMe);
router.delete(
  '/deleteMe',
  authController.protectRoute,
  userController.deleteMe
);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
