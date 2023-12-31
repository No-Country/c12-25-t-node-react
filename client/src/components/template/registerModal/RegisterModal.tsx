import { useState } from 'react'
import {
  Container,
  Grid,
  Button,
  Box,
  FormHelperText,
  InputAdornment,
  IconButton,
  Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LogoText from '../../atom/LogoText'
import TextField from '@mui/material/TextField'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { styled } from '@mui/material/styles'
import useIsMd from '../../../hooks/useIsMd'
import { useFormik } from 'formik'
import { registerSchema } from '../../../schemas/schemas'
import { useSnackbar } from 'notistack'
import { useUserStore } from '../../../store/auth'
import { stylesRegisterModal } from './RegisterModal.styles'
import './RegisterModalStyles.css'

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

interface RegisterModalProps {}

const RegisterModal: React.FC<RegisterModalProps> = ({}) => {
  const navigate = useNavigate()
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
        //handleCloseRegisterModal()
      } catch (error) {
        enqueueSnackbar('¡El email ya se encuentra registrado!', {
          variant: 'error',
        })
      }
    },
  })
  const isMd = useIsMd()

  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [showPassword2, setShowPassword2] = useState<boolean>(false)
  const handleTogglePassword = () => setShowPassword(!showPassword)
  const handleTogglePassword2 = () => setShowPassword2(!showPassword2)
  return (
    <Container maxWidth="lg" className="register-appartamentos">
      <Grid container sx={stylesRegisterModal.container}>
        <Grid item xs={12} md={6} sx={stylesRegisterModal.item}>
          <Box
            component="img"
            src="https://i.postimg.cc/x85tPmLB/register-Banner.png"
            sx={stylesRegisterModal.gridBox}
            alt="Living con sofa de cuero y mesa"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={stylesRegisterModal.box1}>
            <Box sx={stylesRegisterModal.box2}>
              <LogoText />
            </Box>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={stylesRegisterModal.boxForm}
            >
              <Box sx={stylesRegisterModal.box3}>
                <Typography sx={stylesRegisterModal.text}>
                  Te damos la<strong> bienvenida</strong>
                </Typography>
                <Typography sx={stylesRegisterModal.text2}>
                  Completá tus datos y comenzá a navegar, miles de inmuebles te
                  están esperando.
                </Typography>
              </Box>
              <RootFormControl sx={{ width: '90%' }}>
                <Box sx={stylesRegisterModal.labelError}>
                  <FormHelperText
                    id="emailRegisterInput"
                    sx={stylesRegisterModal.formHelperText}
                  >
                    Correo electrónico
                  </FormHelperText>
                  {formik.errors.emailRegisterInput &&
                    formik.touched.emailRegisterInput && (
                      <Typography sx={{ color: 'red' }}>
                        {formik.errors.emailRegisterInput}
                      </Typography>
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
                <Box sx={stylesRegisterModal.labelError}>
                  <FormHelperText
                    id="firstNameRegisterInput"
                    sx={stylesRegisterModal.formHelperText}
                  >
                    Nombre
                  </FormHelperText>
                  {formik.errors.firstNameRegisterInput &&
                    formik.touched.firstNameRegisterInput && (
                      <Typography sx={{ color: 'red' }}>
                        {formik.errors.firstNameRegisterInput}
                      </Typography>
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
                <Box sx={stylesRegisterModal.labelError}>
                  <FormHelperText
                    id="lastNameRegisterInput"
                    sx={stylesRegisterModal.formHelperText}
                  >
                    Apellido
                  </FormHelperText>
                  {formik.errors.lastNameRegisterInput &&
                    formik.touched.lastNameRegisterInput && (
                      <Typography sx={{ color: 'red' }}>
                        {formik.errors.lastNameRegisterInput}
                      </Typography>
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
                <Box sx={stylesRegisterModal.labelError}>
                  <FormHelperText
                    id="passwordRegisterInput"
                    sx={stylesRegisterModal.formHelperText}
                  >
                    Contraseña
                  </FormHelperText>
                  {formik.errors.passwordRegisterInput &&
                    formik.touched.passwordRegisterInput && (
                      <Typography sx={{ color: 'red' }}>
                        {formik.errors.passwordRegisterInput}
                      </Typography>
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
                <FormHelperText id="passwordRegisterInput">
                  Alfanumérica, min. 6 caracteres, max. 15 caracteres.
                </FormHelperText>
                <Box sx={stylesRegisterModal.labelError}>
                  <FormHelperText
                    id="passwordRegisterInput2"
                    sx={stylesRegisterModal.formHelperText}
                  >
                    Repetir Contraseña
                  </FormHelperText>
                  {formik.errors.passwordRegisterInput2 &&
                    formik.touched.passwordRegisterInput2 && (
                      <Typography sx={{ color: 'red' }}>
                        {formik.errors.passwordRegisterInput2}
                      </Typography>
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
                <Typography sx={{ lineHeight: '1.2', paddingLeft: '6px' }}>
                  Al registrarte estás aceptando los{' '}
                  <Box
                    component="span"
                    sx={{
                      fontWeight: 'bold',
                      ':hover': { cursor: 'pointer' },
                    }}
                    onClick={() => navigate('/terms-conditions')}
                  >
                    términos y condiciones de uso.
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* {openRegisterModal && (
        <RegisterModal
          openRegisterModal={openRegisterModal}
          handleCloseRegisterModal={handleCloseRegisterModal}
        />
      )} */}
    </Container>
  )
}

export default RegisterModal
