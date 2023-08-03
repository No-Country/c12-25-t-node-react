const property_services = require('../database/models').properties_services;

module.exports = {
    createPropertyServices: (req, res) => {
        const id = req.params.id;
        if (!req.body) {
            res.send(400).send({
                message: "No se puede crear los detalles sin informacion"
            })
            return;
        } else {
            const newObj = req.body;
            newObj.property_id = id;
            try {
                return property_services.create(newObj)
                    .then(data => {
                        res.status(200).send({
                            message: "Servicios registrados exitosamente.",
                            data
                        })
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error al guardar los servicios.",
                            err
                        })
                    })

            } catch (error) {
                res.status(500).send({
                    message: "Ocurrió un error al guardar los servicios de la propiedad.",
                    error: error
                })
            }
        }
    },
    async updatePropertyServices(req, res) {
        const id = req.params.id;
        const roomServices = await property_services.findByPk(id);

        if (!roomServices) {
            res.send({
                message: "No se encontró un registro asociado al id enviado."
            })
        } else {
            try {
                return property_services.update(req.body, {
                        where: { id: id }
                    })
                    .then(data => {
                        res.status(200).send({
                            message: 'Actualizado correctamente.',
                            data
                        })
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error al actualizar.",
                            err
                        })
                    })

            } catch (error) {
                res.status(500).send({
                    message: "Ocurrió un error al actualizar.",
                    error: error
                })
            }
        }
    },
    deletePropertyServices: (req, res) => {
        const id = req.params.id;

        return property_services.destroy({ where: { id: id } })
            .then(() => res.status(204).send({
                message: "Eliminado con exito"
            }))
            .catch(err => {
                res.status(500).send({
                    message: "No se pudo eliminar.",
                    err
                })
            })
    }
}