const propertyPhotos = require('../database/models').PropertiesPhotos;

const cloudinary = require('../middleware/clodinary');
module.exports = {
    createPropertyImages: async (req, res) => {
    const id = req.params.id;
    const files = req.files;

    if (!files) {
        return res.status(401).json({ error: "Por favor, sube archivos" });
    }

    
    try {
        const urls = [];
        for (const file of files) {
          const result = await cloudinary.uploader.upload(file.path);
          urls.push(result.secure_url);
        }
  
        // Aquí ya tienes todas las URLs de las imágenes subidas a Cloudinary en el array 'urls'
        console.log(urls);
  
        // Ahora puedes guardar las URLs en la base de datos utilizando el modelo 'PropertiesPhotos'
        const propertyPhotosData = await Promise.all(
          urls.map((url) => propertyPhotos.create({ url, property_id: id }))
        );
  
        return res.status(200).json({ message: "Se guardaron correctamente las imágenes", propertyPhotos: propertyPhotosData });
      } catch (error) {
        console.error('Error al cargar las imágenes a Cloudinary o guardar en la base de datos:', error);
        return res.status(500).json({ message: 'Hubo un problema', error });
      }
    

},
      
    
    updatePropertyImages: async (req, res) => {
      const id = req.params.id;
      const files = req.files;

    if (!files) {
      return res.status(401).json({ error: "Por favor, sube archivos" });
    }

    try {
      const urls = [];
      for (const file of files) {
        const result = await cloudinary.uploader.upload(file.path);
        urls.push(result.secure_url);
      }

      // Aquí ya tienes todas las URLs de las imágenes subidas a Cloudinary en el array 'urls'
      console.log(urls);

      // Actualiza las URLs de las imágenes en la base de datos utilizando el modelo 'PropertiesPhotos'
      await propertyPhotos.update({ url: null }, { where: { property_id: id } });
      await Promise.all(
        urls.map((url) => propertyPhotos.create({ url, property_id: id }))
      );

      return res.status(200).json({ message: "Se actualizaron correctamente las imágenes" });
    } catch (error) {
      console.error('Error al cargar las imágenes a Cloudinary o actualizar en la base de datos:', error);
      return res.status(500).json({ message: 'Hubo un problema', error });
    
  }
    },

    deletePropertyImages: (req, res) => {
      const id = req.params.id;
      try {
        return propertyPhotos.destroy(
          {
            where:{id:id}
          },
        ).then(response => { res.status(200).send({
          message:"Eliminado con exito", response
        })}).catch(response => { res.status(500).send({
          message: "Hubo un error al eliminar", response
        })})
      } catch (error) {
        res.status(500).send({
          message :"Ocurrio un error",
          error: error
        })
      }
    }
}