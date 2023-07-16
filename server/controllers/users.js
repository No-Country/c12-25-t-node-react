const user = require('../database/models').Users;


module.exports = {
    async getUsers(req, res) {
        return user.findAll({ attributes: { exclude: ["is_active", "password", "created_at", "updated_at"] } }).then(data => {
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error al realizar la consulta."
                });
            });
    },
    updateUser(req, res) {
        const id = req.params.id;
        return user.update(req.body, {
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.status(200).send({
                        message: "Actualizado con éxito."
                    });
                } else {
                    res.send({
                        message: "No se puedo actualizar."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error al actualizar los datos del usuario."
                });
            });
    },
    deleteUser(req, res) {
        const id = req.params.id;
        return user.update({
                is_active: false
            }, {
                where: { id: id }
            })
            .then(num => {
                if (num == 1) {
                    res.status(200).send({
                        message: "La cuenta ha sido eliminada."
                    });
                } else {
                    res.send({
                        message: "Ocurrió un error al eliminar la cuenta."
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Error al eliminar la cuenta de usuario."
                });
            });
    }
}