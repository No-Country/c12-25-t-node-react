const userController = require('../controllers/users');
const authController = require('../controllers/auth');
const propertyController = require('../controllers/properties');

const express = require('express');
const router = express.Router();

router.get('/api', (req, res) =>
	res.status(200).send({
		message: 'No tienes acceso a la API',
	})
);
// Users login
router.post('/api/create', authController.register);
router.post('/api/login', authController.login);
router.get('/api/me', authController.me);

//User routes
router.get('/api/users/list', userController.getUsers);
router.post('/api/users/update/:id', userController.updateUser);
router.delete('/api/users/:id', userController.deleteUser);

//Property routes
router.get('/api/properties/list', propertyController.getProperties);
router.get(
	'/api/properties/list-available',
	propertyController.getAvailableProperties
);
router.get('/api/properties/find/:id', propertyController.getPropertyById);
router.post('/api/properties/create', propertyController.createProperty);
router.post('/api/properties/update/:id', propertyController.updateProperty);
router.delete('/api/properties/', propertyController.deleteProperty);

module.exports = router;
