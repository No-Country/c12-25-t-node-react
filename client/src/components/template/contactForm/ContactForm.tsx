import { useState } from 'react'
import {
  Box,
  TextField,
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
import { stylesContactForm } from './ContactForm.styles'

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
      <Box sx={ stylesContactForm.boxPrimary } >
        <form onSubmit={ handleSubmit } className='formContact'>
          <Box sx={ stylesContactForm.boxContainer }>
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
          <Box sx={ stylesContactForm.box }>
            <Typography variant="body1" sx={ stylesContactForm.text }>
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
        <Box sx={ stylesContactForm.button }>
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
        <DialogActions sx={ stylesContactForm.dialogActions }>
          <PrimaryButton text='Cerrar' onClick={ handleCloseModal } />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ContactForm
