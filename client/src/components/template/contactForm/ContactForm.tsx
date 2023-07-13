import { useState } from 'react';
import { Box, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });

  const [openModal, setOpenModal] = useState(false);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Validar los campos
    const errors = {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    };
    if (!formData.name) {
      errors.name = 'El nombre es obligatorio';
    }
    if (!formData.lastName) {
      errors.lastName = 'El apellido es obligatorio';
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
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          required
        />
        <TextField
          label="Apellido"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          fullWidth
          required
        />
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
        <TextField
          label="Correo Electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          required
        />
        <TextField
          label="Mensaje"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          multiline
          rows={4}
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ marginTop: 2 }}onClick={handleSubmit}>
  Enviar
</Button>
      </form>

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