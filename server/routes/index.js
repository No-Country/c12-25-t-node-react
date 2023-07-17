/* Controllers */
const userController = require('../controllers/users');
const authController = require('../controllers/auth');
const propertyController = require('../controllers/properties');
const checkAuth = require('../middleware/checkAuth').checkAuth;
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'No tienes acceso a la API',
    }));
    // Users login
    app.post('/api/create', authController.register);
    app.post('/api/login', authController.login);
    app.get('/api/me', authController.me);


    //User routes
    app.get('/api/users/list', checkAuth, userController.getUsers);
    app.put('/api/users/update/:id', checkAuth, userController.updateUser);
    app.delete('/api/users/:id', checkAuth, userController.deleteUser);
    //Property routes
    app.get('/api/properties/list', checkAuth, propertyController.getProperties);
    app.get('/api/properties/list-available', checkAuth, propertyController.getAvailableProperties);
    app.get('/api/properties/find/:id', checkAuth, propertyController.getPropertyById);
    app.get('/api/properties/list-detail', checkAuth, propertyController.getPropertiesDetail);
    app.get('/api/properties/:id/full-detail', checkAuth, propertyController.getPropertyFullDetail);
    app.post('/api/properties/create', checkAuth, propertyController.createProperty);
    app.post('/api/properties/create-detail', checkAuth, propertyController.createPropertyDetail);
    app.put('/api/properties/update/:id', checkAuth, propertyController.updateProperty);
    app.delete('/api/properties/', checkAuth, propertyController.deleteProperty);
};