const user = require('../database/models').Users;
const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
  });
  

module.exports = {
    async getUsers(req, res) {
        return user.findAll({}).then(data => {
                res.status(200).send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Ocurrió un error al realizar la consulta."
                });
            });
    },
    
    async updateUser(req, res) {
        const id = req.params.id;
        const newUserObj = req.body;
        if(req.file){
            const result = await cloudinary.v2.uploader.upload(req.file.path);
            newUserObj.avatar = result.url
        return user.update(
          newUserObj
          
            , {
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
        }else{
            return user.update(
               req.body
            ,{
                where: {id:id}
            
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
     

        // const id = req.params.id;

        // try {
        //   const usuario = await user.findByPk(id);
          
        //   if (!usuario) {
        //     return res.status(404).json({ mensaje: 'Usuario no encontrado' });
        //   }
      
        //   if (req.file) {
        //     // Subir imagen a Cloudinary
        //     const result = await cloudinary.uploader.upload(req.file.path);
      
        //     // Asignar la URL generada al campo avatar
        //     usuario.avatar = result.url;
        //   }
        //   console.log(usuario)
      
        //   // Construir un objeto con los campos a actualizar
        // //   const camposActualizados = req.body
      
        // //   Object.keys(req.body).forEach((campo) => {
        // //     if (usuario.property.hasOwnProperty.call(campo)) {
        // //       camposActualizados[campo] = req.body[campo];
        // //     }
        // //   });
        // //    console.log(camposActualizados)
        //   // Actualizar los campos en la base de datos
        //   await user.update(usuario);
      
        //   return res.status(200).json({ mensaje: 'Usuario actualizado con éxito' });
        // } catch (error) {
        //   return res.status(500).json({ mensaje: 'Error al actualizar el usuario' });
        // }

    },
    deleteUser(req, res) {
        const id = req.params.id;
        return user.delete({
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
    },
}