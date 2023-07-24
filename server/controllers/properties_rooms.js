const property_rooms = require('../database/models').properties_rooms;
module.exports = {
    createPropertyRooms: (req, res) => {
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
                return property_rooms.create(newObj)
                    .then(data => {
                        res.status(200).send({
                            message: "Detalles creados exitosamente!",
                            data
                        })
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: "Error al guardar datos",
                            err
                        })
                    })

            } catch (error) {
                res.status(500).send({
                    message: "Hubo un error al crear los detalle de la propiedad.",
                    error: error
                })
            }
        }
    },
    async updatePropertyRooms(req, res) {
        const id = req.params.id;
        const roomDetails = await property_rooms.findByPk(id);

        if (!roomDetails) {
            res.send({
                message: "No se encontro ningún registro con ese id."
            })
        } else {
            try {
                return property_rooms.update(req.body, {
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
                            message: "Error al actualizar",
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
    deletePropertyRooms: (req, res) => {
        const id = req.params.id;

        return property_rooms.destroy({ where: { id: id } })
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