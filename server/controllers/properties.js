const property = require('../database/models').Properties;
module.exports = {
    getProperties: (req, res) => {
        return property.findAll({ attributes: { exclude: ["updated_at", "created_at"] } }).then(data => {
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error al realizar la consulta."
                });
            });
    },
    getAvailableProperties: (req, res) => {
        return property.findAll({
                where: {
                    available: true
                }
            }).then(data => {
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error al realizar la consulta."
                });
            });
    },
    getPropertyById: (req, res) => {
        const id = req.params.id;
        return property.findByPk(id)
            .then(data => {
                if (data) {
                    res.status(200).send(data);
                } else {
                    res.status(404).send({
                        message: `No se encontró una propiedad con el id=${id}.`
                    })
                }
            });
    },
    createProperty: (req, res) => {
        if (!req.body) {
            res.status(400).send({
                message: "No se puede crear una propiedad sin información."
            });
            return;
        }
        const newProperty = req.body;
        return property.create(newProperty)
            .then(data => {
                res.status(200).send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error al crear la nueva propiedad."
                });
            });
    },
    updateProperty: (req, res) => {
        const id = req.params.id;
        return property.update(req.body, {
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
    deleteProperty: (req, res) => {
        const id = req.params.id;
        return property.update({
                available: false
            }, {
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
    }
}