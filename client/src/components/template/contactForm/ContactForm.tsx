import { useState } from 'react'
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography
} from '@mui/material'
import {
  FormDetail,
  FormError,
  InitialState
} from '../../../model/form'
import InputForm from '../../atom/InputForm'
import PrimaryButton from '../../atom/PrimaryButton'
import './ContactForm.styles.css'

const ContactForm = () => {
  const [formData, setFormData] = useState<FormDetail>(InitialState)
  const [errors, setErrors] = useState<FormError>(InitialState)
  const [openModal, setOpenModal] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const errors = {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    }

    if (!formData.fullName) {
      errors.fullName = 'El nombre es obligatorio'
    }


    if (!formData.phone) {
      errors.phone = 'El teléfono es obligatorio'
    } else if (!/^\+?\d{10,13}$/.test(formData.phone)) {
      errors.phone = 'El teléfono debe tener entre 10 y 13 dígitos, incluyendo el signo +'
    }

    if (!formData.email) {
      errors.email = 'El correo electrónico es obligatorio'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Ingresa un correo electrónico válido'
    }

    if (!formData.message) {
      errors.message = 'El mensaje es obligatorio';
    } else if (formData.message.length > 255) {
      errors.message = 'El mensaje no puede tener más de 255 caracteres'
    }

    setErrors(errors)

    if (Object.values(errors).every((error) => error === '')) {
      setOpenModal(true)
      setFormData(InitialState)
    }
  }

  const handleCloseModal = () => setOpenModal(false)

  return (
    <Box>
      <Box
        sx={ {
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1rem'
        } }
      >
        <form onSubmit={ handleSubmit } className='formContact'>
          <Box
            sx={ {
              width: '350px',
              display: 'flex',
              flexDirection: 'column',
              marginRight: '5px'
            } }>
            <InputForm
              inputLabel='Ingresá tu Nombre y Apellido'
              inputName='fullName'
              inputValue={ formData.fullName }
              inputChange={ handleChange }
              inputError={ !!errors.fullName }
              inputHelper={ errors.fullName }
              labelText='Nombre completo'
            />
            <InputForm
              inputLabel='Ingresá tu número telefónico'
              inputName='phone'
              inputValue={ formData.phone }
              inputChange={ handleChange }
              inputError={ !!errors.phone }
              inputHelper={ errors.phone }
              labelText='Teléfono'
            />
            <InputForm
              inputLabel='Ingresá tu correo electrónico'
              inputName='email'
              inputValue={ formData.email }
              inputChange={ handleChange }
              inputError={ !!errors.email }
              inputHelper={ errors.email }
              labelText='Correo Electrónico'
            />
          </Box>
          <Box sx={ { width: '350px', height: '100%' } }>
            <Typography variant="body1" sx={ styleText }>
              Mensaje
            </Typography>
            <TextField
              label='Ingresá tu consulta o comentario'
              name='message'
              value={ formData.message }
              onChange={ handleChange }
              error={ !!errors.message }
              helperText={ errors.message }
              fullWidth
              multiline
              rows={ 10 }
              required
              sx={ { width: '100%', height: '100%' } }
            />
          </Box>
        </form>
        <Box sx={ styleButton }>
          <PrimaryButton
            text='Enviar consulta'
            onClick={ handleSubmit }
            sx={ { width: { xs: '350px' } } }
          />
        </Box>
      </Box>
      <Dialog
        open={ openModal }
        onClose={ handleCloseModal }
        sx={ { padding: '2.5rem 1.5rem' } }
      >
        <DialogTitle>¡Formulario enviado con éxito!</DialogTitle>
        <DialogContent>
          <p>Gracias por contactarnos. Pronto nos pondremos en contacto contigo.</p>
        </DialogContent>
        <DialogActions sx={ { padding: '0.75rem 1.5rem 1.75rem' } }>
          <PrimaryButton text='Cerrar' onClick={ handleCloseModal } />
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;

const styleText = {
  color: '#0C0C39',
  fontSize: '16px',
  fontWeight: '600',
  textAlign: 'left',
  padding: '0px 2px 6px'
}

const styleButton = {
  display: 'flex',
  justifyContent: { xs: 'center', md: 'flex-end' },
  paddingRight: { xs: '0', md: '1.1rem' },
  '@media (max-width: 1010px)': {
    justifyContent: 'flex-end',
    left: '50%'
  },
  '@media (max-width: 914px)': {
    justifyContent: 'center',
  }
}