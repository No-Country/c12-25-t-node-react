import { useState } from 'react'
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, InputLabel, Typography } from '@mui/material'
import './ContactForm.styles.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    email: '',
    message: '',
  })

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      fullName: e.target.value,
    })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    // Validar los campos
    const errors = {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    }
    if (!formData.fullName) {
      errors.fullName = 'El nombre es obligatorio';
    }
    if (!formData.phone) {
      errors.phone = 'El teléfono es obligatorio';
    } else if (!/^\+?\d{10,13}$/.test(formData.phone)) {
      errors.phone = 'El teléfono debe tener entre 10 y 13 dígitos, incluyendo el signo +';
    }
    if (!formData.email) {
      errors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Ingresa un correo electrónico válido';
    }
    if (!formData.message) {
      errors.message = 'El mensaje es obligatorio';
    } else if (formData.message.length > 255) {
      errors.message = 'El mensaje no puede tener más de 255 caracteres';
    }
    setErrors(errors);

    if (Object.values(errors).every((error) => error === '')) {
      setOpenModal(true);
    }
  }

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  return (
    <Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        
      <form onSubmit={handleSubmit} className='formContact'>
        <Box sx={{width: '350px',margin: '5px'}}>
          <Typography variant="body1"sx={{color: '#0C0C39', fontSize: '16px',fontWeight: '600'}}>Nombre completo</Typography>
            <TextField
            label="Nombre completo"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              error={!!errors.fullName}
              helperText={errors.fullName}
              fullWidth
              required
            />

          <Typography variant="body1"sx={{color: '#0C0C39', fontSize: '16px',fontWeight: '600'}}>Teléfono</Typography>
            <TextField
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              required
              />
          
          <Typography variant="body1"sx={{color: '#0C0C39', fontSize: '16px',fontWeight: '600'}}>Correo Electrónico</Typography>
            <TextField
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
            />
        </Box>
        <Box sx={{width: '350px', height:'100%', margin: '5px'}}>
          <Typography variant="body1"sx={{color: '#0C0C39', fontSize: '16px',fontWeight: '600'}}>Mensaje</Typography>
            <TextField
              name="message"
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              multiline
              rows={8}
              required
              sx={{width:'100%', height:'100%'}}
            />
            
        </Box>
      </form>
      <Button type="submit" variant="contained" color="primary" sx={{ }}onClick={handleSubmit}>Enviar</Button>
      </Box>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>¡Formulario enviado con éxito!</DialogTitle>
        <DialogContent>
          <p>Gracias por contactarnos. Pronto nos pondremos en contacto contigo.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;