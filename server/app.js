const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const multer = require('multer');
// const cors = require('cors')
// const helmet = require('helmet')
require('dotenv').config()

const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + file.originalname)
    }
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(multer({ storage }).single('image'))
app.use(express.json())

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido, esta es la API del Proyecto Appartments - NC',
}));

const PORT = process.env.PORT || 8400
app.use('/public/uploads', express.static('public/uploads'));

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});

module.exports = app;