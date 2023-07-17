const users = require('../database/models').Users;
const bcrypt = require("bcrypt");
const bcrypt2 = require('../utils/handleBcrypt').compare;
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
                    is_active: true,
                },
            })
            .then(users => res.status(200).send(users))
            .catch(error => res.status(400).send(error))

    },
    async login(req, res) {
        const user = await users.findOne({
            where: {
                email: req.body.email
            }
        })
        if (user) {
            const password_valid = bcrypt2(req.body.password, user.password);
            if (password_valid) {
                const token = jwt.sign({
                    'id': user.id,
                    'email': user.email,
                    'first_name': user.first_name
                }, process.env.JWT_SECRET_WORD);
                res.status(200).json({
                    token: token
                });
            } else {
                res.status(401).json({ error: "La contraseña no es válida." })
            }
        } else {
            res.status(404).json({ error: "Usuario no encontrado." })
        }
    },
    async me(req, res) {
        try {
            let token = req.headers['authorization'];
            console.log(token)
            let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
            let reqUser = decoded;
            if (reqUser) {
                let user = await users.findOne({ where: { id: reqUser.id }, attributes: { exclude: ["password"] } });
                if (user === null) {
                    res.status(404).json({ 'msg': "Usuario no encontrado" });
                } else {
                    res.status(200).json(user);
                }
            }
        } catch (err) {
            res.status(401).send(err);
        }

    }
}