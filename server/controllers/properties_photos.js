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

    // Obténgo el registro actual de la propiedad desde la base de datos
    const existingPropertyPhoto = await propertyPhotos.findOne({ where: { property_id: id } });

    // Si no existe el registro, crea uno nuevo
    if (!existingPropertyPhoto) {
      await propertyPhotos.create({ url: urls[0], property_id: id });
    } else {
      // Si ya existe el registro, actualiza la URL con la más reciente
      await existingPropertyPhoto.update({ url: urls[0] });
    }

    return res.status(200).json({ message: "Se actualizó correctamente la imagen" });
  } catch (error) {
    console.error('Error al cargar las imágenes a Cloudinary o actualizar en la base de datos:', error);
    return res.status(500).json({ message: 'Hubo un problema', error });
  }
    },

    deletePropertyImages: async (req, res) => {
      const id = req.params.id;

  try {
    // Obténgo los registros existentes relacionados con la propiedad desde la base de datos
    const existingPropertyPhotos = await propertyPhotos.findAll({ where: { property_id: id } });

    if (existingPropertyPhotos.length === 0) {
      return res.status(404).json({ error: "No se encontraron imágenes asociadas a esta propiedad" });
    }

    // Elimina los registros existentes uno por uno
    for (const photo of existingPropertyPhotos) {
      await photo.destroy();
    }

    return res.status(200).json({ message: "Se eliminaron correctamente las imágenes" });
  } catch (error) {
    console.error('Error al eliminar las imágenes de la base de datos:', error);
    return res.status(500).json({ message: 'Hubo un problema', error });
  }
    }
}