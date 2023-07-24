/* Controllers */
const userController = require('../controllers/users');
const authController = require('../controllers/auth');
const propertyController = require('../controllers/properties');
const propertyServicesController = require('../controllers/properties_services');
const propertyPhotosController = require('../controllers/properties_photos');
const propertyDetailController = require('../controllers/properties_details');
const propertyRoomsController = require('../controllers/properties_rooms');
const { avatarUpload, photosUpload } = require('../middleware/multer')
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
    app.put('/api/users/update/:id', checkAuth, avatarUpload, userController.updateUser);
    app.delete('/api/users/:id', checkAuth, userController.deleteUser);
    //Property routes
    app.get('/api/properties/list', propertyController.getProperties);
    app.get('/api/properties/list-available', propertyController.getAvailableProperties);
    app.get('/api/properties/find/:id', propertyController.getPropertyById);
    app.get('/api/properties/list-detail', propertyController.getPropertiesDetail);
    app.get('/api/properties/:id/full-detail', propertyController.getPropertyFullDetail);
    app.post('/api/properties/create', checkAuth, propertyController.createProperty);
    app.post('/api/properties/:id/detail/create', checkAuth, propertyController.createPropertyDetail);
    app.put('/api/properties/update/:id', checkAuth, propertyController.updateProperty);
    app.delete('/api/properties/:id', checkAuth, propertyController.deleteProperty);
    //Property detail routes
    app.post('/api/properties/:id/detail', checkAuth, propertyDetailController.createPropertyDetail);
    app.put('/api/properties/:id/detail', checkAuth, propertyDetailController.updatePropertyDetail);
    app.delete('/api/properties/:id/detail', checkAuth, propertyDetailController.deletePropertyDetail);
    //Property services routes
    app.post('/api/properties/:id/services', checkAuth, propertyServicesController.createPropertyServices);
    app.put('/api/properties/:id/services', checkAuth, propertyServicesController.updatePropertyServices);
    app.delete('/api/properties/:id/services', checkAuth, propertyServicesController.deletePropertyServices);
    //Property images routes
    app.post('/api/properties/:id/images', checkAuth, photosUpload, propertyPhotosController.createPropertyImages);
    app.put('/api/properties/:id/images', checkAuth, propertyPhotosController.updatePropertyImages);
    app.delete('/api/properties/:id/images', checkAuth, propertyPhotosController.deletePropertyImages);
    //Property rooms routes
    app.post('/api/properties/:id/rooms', checkAuth, propertyRoomsController.createPropertyRooms);
    app.put('/api/properties/:id/rooms', checkAuth, propertyRoomsController.updatePropertyRooms);
    app.delete('/api/properties/:id/rooms', checkAuth, propertyRoomsController.deletePropertyRooms);
};