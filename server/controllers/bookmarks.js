const bookmarks = require('../database/models').bookmarks;
const users = require('../database/models').Users;
const properties = require('../database/models').Properties;
const jwt = require("jsonwebtoken");

module.exports = {
    async createBookmark(req, res) {
        try {
            if (!req.params) {
                res.status(400).send({
                    message: "No se enviaron los parámetros necesarios."
                });
                return;
            }
            let token = req.headers['authorization'];
            let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
            let reqUser = decoded;
            const user_id = reqUser.id;
            const property_id = parseInt(req.params.property_id);
            const user = await users.findOne({
                where: { id: user_id }
            })
            const property = await properties.findOne({
                where: { id: property_id }
            })
            return user.addProperties(property, { through: bookmarks })
                .then(data => {
                    res.status(200).send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message | "Ocurrió un error al guardar en favoritos."
                    });
                });
        } catch (err) {
            res.send(err);
        }

    },
    async getBookmarks(req, res) {
        try {
            let token = req.headers['authorization'];
            let decoded = jwt.verify(token, process.env.JWT_SECRET_WORD);
            let reqUser = decoded;
            const userBookmarks = await bookmarks.findAndCountAll({
                where: {
                    user_id: reqUser.id
                },
                attributes: ['id'],
                order: [
                    ['created_at', 'DESC']
                ],
                include: {
                    model: properties,
                },
            });
            res.status(200).send(userBookmarks);
        } catch (err) {
            res.send(err);
        }
    },
    async deleteBookmark(req, res) {
        if (!req.params) {
            res.status(400).send({
                message: "No se enviaron los parámetros necesarios."
            });
            return;
        }
        const id = req.params.id;
        bookmarks.destroy({ where: { id: id } })
            .then(function(deletedRecord) {
                if (deletedRecord === 1) {
                    res.status(204).json({ message: "La propiedad fue eliminada de favoritos." });
                } else {
                    res.status(404).json({ message: "No se encontró un registro de favoritos con ese ID." })
                }
            })
            .catch(function(error) {
                res.status(500).json(error);
            });
    }
}