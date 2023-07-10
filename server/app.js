const express = require('express');
const bodyParser = require('body-parser');

const http = require('http');

// const cors = require('cors')
// const helmet = require('helmet')
require('dotenv').config()


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./routes')(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Bienvenido, esta es la API del Proyecto Appartments - NC',
}));

const PORT = process.env.PORT || 8400

app.use(express.json())

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`Server on PORT: ${PORT}`);
});

module.exports = app;