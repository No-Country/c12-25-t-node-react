import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  IconButton,
  TextField,
  Typography,
} from '@mui/material'
import LogoText from '../../atom/LogoText'
import { FormHelperText } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import { styled } from '@mui/material/styles'
import PrimaryButton from '../../atom/PrimaryButton'
import { useFormik } from 'formik'
import { loginSchema } from '../../../schemas/schemas'
import { useSnackbar } from 'notistack'
import { useUserStore } from '../../../store/auth'
import loginBanner from '../../../assets/loginBanner.png'
import RegisterModal from '../registerModal/RegisterModal'
import { stylesLoginModal } from './LoginModal.styles'

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
}))

interface LoginModalProps {
  openLoginModal: boolean
  handleCloseLoginModal: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({}) => {
  const navigate = useNavigate()
  const login = useUserStore((state) => state.login)
  const loginWithGoogle = useUserStore((state) => state.loginWithGoogle)
  const formik = useFormik({
    initialValues: {
      emailLoginInput: '',
      passwordLoginInput: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await login(values.emailLoginInput, values.passwordLoginInput)
        enqueueSnackbar('¡Sesión iniciada con éxito!', {
          variant: 'success',
        })
        setTimeout(() => {
          navigate('/')
        }, 1500)
      } catch (error) {
        enqueueSnackbar('¡Usuario o contraseña incorrecta!', {
          variant: 'error',
        })
      }
    },
  })
  const { enqueueSnackbar } = useSnackbar()

  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false)
  const handleCloseRegisterModal = () => setOpenRegisterModal(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleTogglePassword = () => setShowPassword(!showPassword)

  const handleChangeToRegister = () => {
    setTimeout(() => {
      setOpenRegisterModal(true)
    }, 300)
  }

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle()
    try {
      enqueueSnackbar('¡Sesión iniciada con éxito!', {
        variant: 'success',
      })
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } catch (error) {
      enqueueSnackbar('¡Ha ocurrido un error. Intenta nuevamente!', {
        variant: 'error',
      })
    }
  }

  return (
    <Container maxWidth="lg">
      <Grid container sx={stylesLoginModal.container}>
        <Grid item xs={12} md={6} sx={stylesLoginModal.item}>
          <Box
            component="img"
            src={loginBanner}
            sx={stylesLoginModal.gridBox}
            alt="Cocina liminosa con isla"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={stylesLoginModal.box1}>
            <Box sx={stylesLoginModal.box2}>
              <LogoText />
            </Box>
            <Box
              component="form"
              //onSubmit={handleLogIn}
              onSubmit={formik.handleSubmit}
              sx={stylesLoginModal.boxForm}
            >
              <Typography sx={stylesLoginModal.text}>
                Ingresá a <strong>tu cuenta</strong>
              </Typography>
              <Typography sx={stylesLoginModal.textSmall}>
                Vas a poder agregar tus propiedades favoritas en tu perfil y
                realizar el seguimiento de todas tus consultas.
              </Typography>
              <RootFormControl sx={stylesLoginModal.rootFormControl}>
                <FormHelperText
                  id="emailLoginInput"
                  sx={stylesLoginModal.formHelperText}
                >
                  Correo electrónico
                </FormHelperText>
                <TextField
                  id="emailLoginInput"
                  name="emailLoginInput"
                  type="email"
                  variant="outlined"
                  value={formik.values.emailLoginInput}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Ingresá tu correo electrónico"
                  sx={{ mb: 2 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
                    },
                  }}
                />
                {formik.errors.emailLoginInput &&
                  formik.touched.emailLoginInput && (
                    <Typography sx={{ color: 'red' }}>
                      {formik.errors.emailLoginInput}
                    </Typography>
                  )}
                <FormHelperText
                  id="passwordLoginInput"
                  sx={stylesLoginModal.formHelperText}
                >
                  Contraseña
                </FormHelperText>
                <TextField
                  required
                  id="passwordLoginInput"
                  placeholder="Ingresá tu contraseña"
                  type={showPassword ? 'text' : 'password'}
                  variant="outlined"
                  value={formik.values.passwordLoginInput}
                  onChange={formik.handleChange}
                  sx={{ mb: 3 }}
                  InputProps={{
                    style: {
                      borderRadius: '15px',
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
                <PrimaryButton
                  type="submit"
                  text="Ingresar"
                  sx={{ minWidth: '238px', margin: '0.5rem auto' }}
                />
              </RootFormControl>
              <Button
                variant="outlined"
                sx={stylesLoginModal.btn}
                onClick={handleLoginWithGoogle}
              >
                <GoogleIcon /> Ingresar con Google
              </Button>
              <Box mt={2}>
                <Typography component="div">
                  ¿Aún no tenes cuenta?{' '}
                  <Box
                    component="span"
                    sx={{ color: '#1daeff', ':hover': { cursor: 'pointer' } }}
                    onClick={handleChangeToRegister}
                  >
                    Registrate
                  </Box>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {openRegisterModal && (
        <RegisterModal
          openRegisterModal={openRegisterModal}
          handleCloseRegisterModal={handleCloseRegisterModal}
        />
      )}
    </Container>
  )
}

export default LoginModal
