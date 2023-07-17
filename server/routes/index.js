/* Controllers */
const userController = require('../controllers/users');
const authController = require('../controllers/auth');
const propertyController = require('../controllers/properties');
// const storage = require('../middleware/index.middleware.js')
module.exports = (app) => {
    app.get('/api', (req, res) => res.status(200).send({
        message: 'No tienes acceso a la API',
    }));
    // Users login
    app.post('/api/create', authController.register);
    app.post('/api/login', authController.login);
    app.get('/api/me', authController.me);


    //User routes
    app.get('/api/users/list', userController.getUsers);
    app.put('/api/users/update/:id', userController.updateUser);
    app.delete('/api/users/:id', userController.deleteUser);
    //Property routes
    app.get('/api/properties/list', propertyController.getProperties);
    app.get('/api/properties/list-available', propertyController.getAvailableProperties);
    app.get('/api/properties/find/:id', propertyController.getPropertyById);
    app.post('/api/properties/create', propertyController.createProperty);
    app.post('/api/properties/update/:id', propertyController.updateProperty);
    app.delete('/api/properties/', propertyController.deleteProperty);
};