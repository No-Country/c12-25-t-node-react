import { useState } from 'react'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import LogoText from '../../atom/LogoText'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import {
  InputAdornment,
  IconButton,
  Box,
  FormHelperText,
  Button,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import useIsMd from '../../../hooks/useIsMd'
import { useFormik } from 'formik'
import { registerSchema } from '../../../schemas/schemas'
import { useSnackbar } from 'notistack'
import { useUserStore } from '../../../store/auth'

const RootFormControl = styled(FormControl)(() => ({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#1daeff',
    },
    '&:hover fieldset': {
      borderColor: 'blue',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'blue',
    },
  },
  paddingTop: 0,
  paddingBottom: 0,
}))

interface RegisterModalProps {
  openRegisterModal: boolean
  handleCloseRegisterModal: () => void
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  openRegisterModal,
  handleCloseRegisterModal,
}) => {
  const register = useUserStore((state) => state.register)
  const clearError = useUserStore((state) => state.clearError)
  const { enqueueSnackbar } = useSnackbar()
  const formik = useFormik({
    initialValues: {
      emailRegisterInput: '',
      firstNameRegisterInput: '',
      lastNameRegisterInput: '',
      passwordRegisterInput: '',
      passwordRegisterInput2: '',
    },
    validationSchema: registerSchema,
    onSubmit: async (values, actions) => {
      clearError()
      try {
        await register(values.emailRegisterInput, values.passwordRegisterInput)
        actions.resetForm()
        enqueueSnackbar(
          '¡Usuario registrado con éxito! Por favor incia sesión',
          {
            variant: 'success',
          }
        )
        handleCloseRegisterModal()
      } catch (error) {
        console.log(error)
        enqueueSnackbar('¡El email ya se encuentra registrado!', {
          variant: 'error',
        })
      }
    },
  })
  const isMd = useIsMd()
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: isMd ? 'translate(-5%, -50%)' : 'translate(-15%, -50%)',
    width: '50vw',
    boxShadow: 24,
    p: 1,
    height: '90vh',
  }
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)
  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2)
  }

  return (
    <>
      <Modal
        open={openRegisterModal}
        onClose={handleCloseRegisterModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box sx={style}>
          <Box
            component="img"
            src="../../../src/assets/registerBanner.png"
            sx={{
              height: '90%',
              position: 'absolute',
              left: -450,
              top: 28,
              borderRadius: 3,

              display: isMd ? 'none' : 'block',
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: 'white',
              height: '100%',
              width: isMd ? '350px' : '550px',
              position: 'absolute',
              top: 0,
              left: isMd ? -167 : 0,
              p: 2,
              zIndex: 999,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pl: 2,
              }}
            >
              <LogoText />
              <IconButton onClick={handleCloseRegisterModal}>
                <CloseIcon sx={{ color: '#1daeff' }} />
              </IconButton>
            </Box>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                mt: 3,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  width: '95%',
                }}
              >
                <Typography component="p" sx={{ fontSize: '1.5rem' }}>
                  Te damos la<strong> bienvenida</strong>
                </Typography>
                <Typography
                  variant="subtitle1"
                  component="p"
                  sx={{
                    mt: 1,
                    mb: 1,
                    textAlign: 'center',
                    lineHeight: '1.5',
                  }}
                >
                  Completá tus datos y comenzá a navegar, miles de inmuebles te
                  están esperando.
                </Typography>
              </Box>
              <RootFormControl sx={{ width: '70%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <FormHelperText
                    id="emailRegisterInput"
                    sx={{
                      mt: 2,
                      mb: 0.5,
                      mx: 0,
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '1rem',
                    }}
                  >
                    Correo electrónico
                  </FormHelperText>
                  {formik.errors.emailRegisterInput &&
                    formik.touched.emailRegisterInput && (
                      <Box
                        component="p"
                        sx={{
                          color: 'red',
                        }}
                      >
                        {formik.errors.emailRegisterInput}
                      </Box>
                    )}
                </Box>
                <TextField
                  id="emailRegisterInput"
                  name="emailRegisterInput"
                  type="email"
                  variant="outlined"
                  placeholder="Ingresá tu correo electrónico"
                  value={formik.values.emailRegisterInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 0.5 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                      height: '35px',
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <FormHelperText
                    id="firstNameRegisterInput"
                    sx={{
                      mt: 1,
                      mb: 0.5,
                      mx: 0,
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '1rem',
                    }}
                  >
                    Nombre
                  </FormHelperText>
                  {formik.errors.firstNameRegisterInput &&
                    formik.touched.firstNameRegisterInput && (
                      <Box
                        component="p"
                        sx={{
                          color: 'red',
                        }}
                      >
                        {formik.errors.firstNameRegisterInput}
                      </Box>
                    )}
                </Box>
                <TextField
                  id="firstNameRegisterInput"
                  name="firstNameRegisterInput"
                  type="text"
                  variant="outlined"
                  placeholder="Ingresá tu nombre"
                  value={formik.values.firstNameRegisterInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 0.5 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                      height: '35px',
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <FormHelperText
                    id="lastNameRegisterInput"
                    sx={{
                      mt: 1,
                      mb: 0.5,
                      mx: 0,
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '1rem',
                    }}
                  >
                    Apellido
                  </FormHelperText>
                  {formik.errors.lastNameRegisterInput &&
                    formik.touched.lastNameRegisterInput && (
                      <Box
                        component="p"
                        sx={{
                          color: 'red',
                        }}
                      >
                        {formik.errors.lastNameRegisterInput}
                      </Box>
                    )}
                </Box>
                <TextField
                  id="lastNameRegisterInput"
                  name="lastNameRegisterInput"
                  type="text"
                  variant="outlined"
                  placeholder="Ingresá tu apellido"
                  value={formik.values.lastNameRegisterInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 0.5 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                      height: '35px',
                    },
                  }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <FormHelperText
                    id="passwordRegisterInput"
                    sx={{
                      mt: 1,
                      mb: 0.5,
                      mx: 0,
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '1rem',
                    }}
                  >
                    Contraseña
                  </FormHelperText>
                  {formik.errors.passwordRegisterInput &&
                    formik.touched.passwordRegisterInput && (
                      <Box
                        component="p"
                        sx={{
                          color: 'red',
                        }}
                      >
                        {formik.errors.passwordRegisterInput}
                      </Box>
                    )}
                </Box>
                <TextField
                  id="passwordRegisterInput"
                  name="passwordRegisterInput"
                  placeholder="Ingresá tu contraseña"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={formik.values.passwordRegisterInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  //sx={{ mb:  }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                      height: '35px',
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword}
                          edge="end"
                          sx={{ color: '#1daeff' }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <FormHelperText
                  id="passwordRegisterInput"
                  sx={{
                    mt: 1,
                    mb: 0.5,
                    mx: 0,
                    color: '#1daeff',
                    fontSize: '0.8rem',
                  }}
                >
                  Alfanumérica, min. 6 caracteres, max. 15 caracteres.
                </FormHelperText>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                  }}
                >
                  <FormHelperText
                    id="passwordRegisterInput2"
                    sx={{
                      mt: 0.5,
                      mb: 0.5,
                      mx: 0,
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: '1rem',
                    }}
                  >
                    Repetir Contraseña
                  </FormHelperText>
                  {formik.errors.passwordRegisterInput2 &&
                    formik.touched.passwordRegisterInput2 && (
                      <Box
                        component="p"
                        sx={{
                          color: 'red',
                        }}
                      >
                        {formik.errors.passwordRegisterInput2}
                      </Box>
                    )}
                </Box>
                <TextField
                  id="passwordRegisterInput2"
                  name="passwordRegisterInput2"
                  placeholder="Repetí tu contraseña"
                  type={showPassword2 ? 'text' : 'password'}
                  variant="outlined"
                  value={formik.values.passwordRegisterInput2}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  sx={{ mb: 2 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                      height: '35px',
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePassword2}
                          edge="end"
                          sx={{ color: '#1daeff' }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  sx={{ display: 'flex' }}
                  type="submit"
                  disabled={formik.isSubmitting ? true : false}
                  variant="contained"
                >
                  Registrate
                </Button>
              </RootFormControl>
              <Box mt={2}>
                <Typography component="div" sx={{ lineHeight: '0.8' }}>
                  Al registrarte estás aceptando los
                  <Typography
                    component="span"
                    sx={{
                      color: 'black',
                      pl: '1ch',
                      fontWeight: 'bold',
                      ':hover': { cursor: 'pointer' },
                    }}
                    //onClick={}
                  >
                    términos y condiciones de uso.
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  )
}

export default RegisterModal
