const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
require('dotenv').config()
const fs = require('fs');

const uploadDirectory = './public/uploads';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors({
    origin: '*'
}));

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