const property = require('../database/models').Properties;

/**
 * @swagger
 * components:
 *   schemas:
 *     Property:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - address
 *         - province
 *         - country
 *         - price
 *         - available
 *         - created_at
 *         - updated_at
 *       properties:
 *         id:
 *           type: integer
 *           format: int32
 *           description: The auto-generated id of the property
 *         name:
 *           type: string
 *           description: The name of the property
 *         description:
 *           type: string
 *           description: The description of the property
 *         images:
 *           type: string
 *           description: The images of the properties
 *         address:
 *           type: string
 *           description: The address of the property
 *         province:
 *           type: string
 *           description: The province of the property
 *         country:
 *           type: string
 *           description: The country of the property
 *         price:
 *           type: number
 *           format: float
 *           description: The price of the property
 *         available:
 *           type: boolean
 *           description: The availability status of the property (draft or confirmed)
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date the property was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date the property was last updated
 *       example:
 *         id: 1
 *         name: Cozy Apartment
 *         description: A beautiful apartment with a view
 *         address: 123 Main St
 *         province: California
 *         country: USA
 *         price: 1500
 *         available: confirmed
 *         created_at: '2023-07-17T12:00:00Z'
 *         updated_at: '2023-07-17T15:30:00Z'
 *
 * /api/properties/list:
 *   get:
 *     summary: Obtiene una lista de todas las propiedades
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: Lista de propiedades obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       500:
 *         description: Error del servidor al obtener las propiedades
 *
 * /api/properties/list-available:
 *   get:
 *     summary: Obtiene una lista de todas las propiedades disponibles
 *     tags: [Properties]
 *     responses:
 *       200:
 *         description: Lista de propiedades disponibles obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Property'
 *       500:
 *         description: Error del servidor al obtener las propiedades disponibles
 *
 * /api/properties/find/{id}:
 *   get:
 *     summary: Obtiene una propiedad por su ID
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la propiedad a buscar
 *     responses:
 *       200:
 *         description: Propiedad encontrada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       404:
 *         description: La propiedad con el ID especificado no fue encontrada
 *       500:
 *         description: Error del servidor al obtener la propiedad
 *
 * /api/properties/create:
 *   post:
 *     summary: Crea una nueva propiedad
 *     tags: [Properties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       201:
 *         description: Propiedad creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       400:
 *         description: Error de validación de datos al crear la propiedad
 *       500:
 *         description: Error del servidor al crear la propiedad
 *
 * /api/properties/update/{id}:
 *   post:
 *     summary: Actualiza una propiedad existente por su ID
 *     tags: [Properties]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID de la propiedad a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       200:
 *         description: Propiedad actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Property'
 *       400:
 *         description: Error de validación de datos al actualizar la propiedad
 *       404:
 *         description: La propiedad con el ID especificado no fue encontrada
 *       500:
 *         description: Error del servidor al actualizar la propiedad
 *
 * /api/properties/:
 *   delete:
 *     summary: Elimina una propiedad por su ID
 *     tags: [Properties]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Property'
 *     responses:
 *       200:
 *         description: Propiedad eliminada correctamente
 *       404:
 *         description: La propiedad con el ID especificado no fue encontrada
 *       500:
 *         description: Error del servidor al eliminar la propiedad
 */

module.exports = {
	getProperties: (req, res) => {
		return property
			.findAll({})
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || 'Ocurrió un error al realizar la consulta.',
				});
			});
	},
	getAvailableProperties: (req, res) => {
		return property
			.findAll({
				where: {
					available: true,
				},
			})
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || 'Ocurrió un error al realizar la consulta.',
				});
			});
	},
	getPropertyById: (req, res) => {
		const id = req.params.id;
		return property.findByPk(id).then((data) => {
			if (data) {
				res.status(200).send(data);
			} else {
				res.status(404).send({
					message: `No se encontró una propiedad con el id=${id}.`,
				});
			}
		});
	},
	createProperty: (req, res) => {
		if (!req.body) {
			res.status(400).send({
				message: 'No se puede crear una propiedad sin información.',
			});
			return;
		}
		const newProperty = req.body;
		return property
			.create(newProperty)
			.then((data) => {
				res.status(200).send(data);
			})
			.catch((err) => {
				res.status(500).send({
					message:
						err.message || 'Ocurrió un error al crear la nueva propiedad.',
				});
			});
	},
	updateProperty: (req, res) => {
		const id = req.params.id;
		return property
			.update(req.body, {
				where: { id: id },
			})
			.then((num) => {
				if (num == 1) {
					res.status(200).send({
						message: 'Actualizado con éxito.',
					});
				} else {
					res.send({
						message: 'No se puedo actualizar.',
					});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || 'Error al actualizar los datos del usuario.',
				});
			});
	},
	deleteProperty: (req, res) => {
		const id = req.params.id;
		return property
			.update(
				{
					available: false,
				},
				{
					where: { id: id },
				}
			)
			.then((num) => {
				if (num == 1) {
					res.status(200).send({
						message: 'Actualizado con éxito.',
					});
				} else {
					res.send({
						message: 'No se puedo actualizar.',
					});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || 'Error al actualizar los datos del usuario.',
				});
			});
	},
};
