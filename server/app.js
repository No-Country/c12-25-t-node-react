require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const db = require('./database/models');
const cors = require('cors');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const PORT = process.env.PORT || 8400;
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use('/', require('./routes/index.js'));

// Swagger
const options = {
	definition: {
		openapi: '3.1.0',
		info: {
			title: 'Appartamentos API con Swagger',
			version: '0.1.0',
			description:
				'Esta es una aplicación CRUD simple de API hecha con Express y documentada con Swagger',
			license: {
				name: 'MIT',
				url: 'https://spdx.org/licenses/MIT.html',
			},
			contact: {
				name: 'Equipo de Appartamentos',
				url: 'https://appartamentos.com',
				email: 'info@appartamentos.com',
			},
		},
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT',
				},
			},
		},
		security: {
			BearerAuth: [],
		},
		servers: [
			{
				url: `http://localhost:${PORT}`,
			},
		],
	},
	apis: ['./routes/*.js', './controllers/*.js'],
};

const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Default route
app.get('*', (req, res) => {
	res.status(200).send({
		message: 'Bienvenido, esta es la API del Proyecto Appartments - NC',
	});
});

// Database sync and server start
db.sequelize
	.sync()
	.then(() => {
		const server = http.createServer(app);
		server.listen(PORT, () => {
			console.log(`Server on PORT: ${PORT}`);
		});
	})
	.catch((err) => {
		console.log('Failed to sync db: ' + err.message);
	});

module.exports = app;
