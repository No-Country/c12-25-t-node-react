const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname)
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Tipo de archivo no válido. Solo se permiten imágenes PNG, JPEG y JPG.'), false);
    }
};

const avatarUpload = multer({ storage, fileFilter }).single('image');
const photosUpload = multer({ storage, fileFilter }).array('images', 5);

module.exports = { avatarUpload, photosUpload };