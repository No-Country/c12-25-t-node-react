const user = require('../database/models').Users;

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         first_name:
 *           type: string
 *           description: The first name of the user
 *         last_name:
 *           type: string
 *           description: The last name of the user
 *         email:
 *           type: string
 *           description: The email address of the user
 *         password:
 *           type: string
 *           description: The password of the user
 *         phone:
 *           type: string
 *           description: The phone number of the user
 *         avatar:
 *           type: string
 *           description: The URL of the user's avatar
 *         is_active:
 *           type: boolean
 *           description: Indicates if the user is active
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the user was created
 *         updated_at:
 *           type: string
 *           format: date-time
 *           description: The date and time the user was last updated
 *
 * /api/users/list:
 *   get:
 *     summary: Lists all users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *
 * /users/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 *
 * /users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */

module.exports = {
	async getUsers(req, res) {
		return user
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
	updateUser(req, res) {
		const id = req.params.id;
		return user
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
	deleteUser(req, res) {
		const id = req.params.id;
		return user
			.update(
				{
					is_active: false,
				},
				{
					where: { id: id },
				}
			)
			.then((num) => {
				if (num == 1) {
					res.status(200).send({
						message: 'La cuenta ha sido eliminada.',
					});
				} else {
					res.send({
						message: 'Ocurrió un error al eliminar la cuenta.',
					});
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: err.message || 'Error al eliminar la cuenta de usuario.',
				});
			});
	},
};
