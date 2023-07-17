const users = require('../database/models').Users;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: API de autenticación
 *
 * /api/register:
 *   post:
 *     summary: Registro de usuario
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       200:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error en la solicitud de registro
 *       500:
 *         description: Error interno del servidor
 *
 * /api/login:
 *   post:
 *     summary: Inicio de sesión
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
 *       400:
 *         description: Error en la solicitud de inicio de sesión
 *       401:
 *         description: Credenciales inválidas
 *       500:
 *         description: Error interno del servidor
 *
 * /api/me:
 *   get:
 *     summary: Obtener información del usuario actualmente autenticado
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Información del usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserInfo'
 *       401:
 *         description: No se proporcionó token de autenticación o token inválido
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     RegisterUser:
 *       type: object
 *       required:
 *         - username
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *         - phone
 *         - avatar
 *       properties:
 *         username:
 *           type: string
 *         first_name:
 *           type: string
 *         last_name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         phone:
 *           type: string
 *         avatar:
 *           type: string
 *       example:
 *         username: johndoe
 *         first_name: John
 *         last_name: Doe
 *         email: johndoe@example.com
 *         password: mypassword
 *         phone: 1234567890
 *         avatar: http://example.com/avatar.jpg
 *
 *     LoginUser:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 *       example:
 *         email: johndoe@example.com
 *         password: mypassword
 *
 *     AuthResponse:
 *       type: object
 *       required:
 *         - token
 *       properties:
 *         token:
 *           type: string
 *       example:
 *         token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpYXQiOjE2MzE0NTExNTUsImV4cCI6MTYzMTQ1MTM1NX0.WEEnRkEDkWwbkZ6H-ZklKPxsqXjZ8_YLLOgOq9MlGuY
 *
 *     UserInfo:
 *       type: object
 *       required:
 *         - username
 *         - email
 *       properties:
 *         username:
 *           type: string
 *         email:
 *           type: string
 *       example:
 *         username: johndoe
 *         email: johndoe@example.com
 */

module.exports = {
	async register(req, res) {
		return users
			.findOrCreate({
				where: {
					username: req.body.username,
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					email: req.body.email,
					password: await bcrypt.hash(req.body.password, 10),
					phone: req.body.phone,
					avatar: req.body.avatar,
					is_active: true,
				},
			})
			.then((users) => res.status(200).send(users))
			.catch((error) => res.status(400).send(error));
	},
	async login(req, res) {
		const user = await users.findOne({
			where: {
				email: req.body.email,
			},
		});
		if (user) {
			const password_valid = bcrypt.compare(req.body.password, user.password);
			if (password_valid) {
				const token = jwt.sign(
					{
						id: user.id,
						email: user.email,
						first_name: user.first_name,
					},
					process.env.JWT_SECRET_WORD
				);
				res.status(200).json({
					token: token,
				});
			} else {
				res.status(404).json({ error: 'El usuario no existe.' });
			}
		}
	},
	async me(req, res) {
		try {
			let token = req.headers['authorization'];
			let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
			let reqUser = decoded;
			if (reqUser) {
				let user = await users.findOne({
					where: { id: reqUser.id },
					attributes: { exclude: ['password'] },
				});
				if (user === null) {
					res.status(404).json({ msg: 'Usuario no encontrado' });
				} else {
					res.status(200).json(user);
				}
			}
		} catch (err) {
			res.status(401).send(err);
		}
	},
};
