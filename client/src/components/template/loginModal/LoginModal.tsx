import { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Modal, Button, TextField, FormControl } from '@mui/material'
import LogoText from '../../atom/LogoText'
import { InputAdornment, IconButton, Box, FormHelperText } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import GoogleIcon from '@mui/icons-material/Google'
import { styled } from '@mui/material/styles'
import PrimaryButton from '../../atom/PrimaryButton'
import CloseIcon from '@mui/icons-material/Close'
import RegisterModal from '../registerModal/RegisterModal'
import useIsMd from '../../../hooks/useIsMd'
import { useFormik } from 'formik'
import { loginSchema } from '../../../schemas/schemas'
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
}))

interface LoginModalProps {
  openLoginModal: boolean
  handleCloseLoginModal: () => void
}

const LoginModal: React.FC<LoginModalProps> = ({
  openLoginModal,
  handleCloseLoginModal,
}) => {
  const login = useUserStore((state) => state.login)
  const user = useUserStore((state) => state.user_id)
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
          handleCloseLoginModal()
        }, 1500)
      } catch (error) {
        console.log(error)
        enqueueSnackbar('¡Usuario o contraseña incorrecta!', {
          variant: 'error',
        })
      }
    },
  })
  const { enqueueSnackbar } = useSnackbar()
  const isMd = useIsMd()
  const style = {
    position: 'relative',
    top: '50%',
    left: '50%',
    transform: isMd ? 'translate(-50%, -50%)' : 'translate(-15%, -50%)',
    //width: 'auto',
    boxShadow: 24,
    p: 1,
    //height: '80vh',
  }
  const [openRegisterModal, setOpenRegisterModal] = useState<boolean>(false)
  const handleCloseRegisterModal = () => setOpenRegisterModal(false)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }
  const handleChangeToRegister = () => {
    handleCloseLoginModal()
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
        handleCloseLoginModal()
      }, 1000)
    } catch (error) {
      enqueueSnackbar('¡Ha ocurrido un error. Intenta nuevamente!', {
        variant: 'error',
      })
    }
  }

  return (
    <>
      <RegisterModal
        openRegisterModal={openRegisterModal}
        handleCloseRegisterModal={handleCloseRegisterModal}
      />
      <Modal
        open={openLoginModal}
        onClose={handleCloseLoginModal}
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
            src="../../../src/assets/loginBanner.png"
            sx={{
              height: '95%',
              width: '600px',
              position: 'absolute',
              right: '50vw',
              //left: '0vw',
              bottom: '2.5vh',
              borderRadius: 3,
              display: isMd ? 'none' : 'block',
            }}
          ></Box>
          <Box
            sx={{
              backgroundColor: 'white',
              height: '90%',
              width: isMd ? '350px' : '450px',
              position: 'absolute',
              bottom: '5vh',
              //left: isMd ? -167 : 0,
              right: isMd ? '-800px' : ' 30vw',
              p: 1,
              borderRadius: 3,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <LogoText />
              <IconButton onClick={handleCloseLoginModal}>
                <CloseIcon sx={{ color: '#1daeff' }} />
              </IconButton>
            </Box>
            <Box
              component="form"
              //onSubmit={handleLogIn}
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
                  Ingresá a <strong>tu cuenta</strong>
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
                  Vas a poder agregar tus propiedades favoritas en tu perfil y
                  realizar el seguimiento de todas tus consultas.
                </Typography>
              </Box>
              <RootFormControl sx={{ width: '70%' }}>
                <FormHelperText
                  id="emailLoginInput"
                  sx={{
                    mt: 3,
                    mb: 1,
                    mx: 0,
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: '1rem',
                  }}
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
                    <Box
                      component="p"
                      sx={{
                        color: 'red',
                      }}
                    >
                      {formik.errors.emailLoginInput}
                    </Box>
                  )}
                <FormHelperText
                  id="passwordLoginInput"
                  sx={{
                    mt: 2,
                    mb: 1,
                    mx: 0,
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: '1rem',
                  }}
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
                <PrimaryButton type="submit" text="Ingresar" />
              </RootFormControl>
              <Button
                variant="outlined"
                sx={{ m: 2, py: 0.6, px: 7.5, borderRadius: 2.2 }}
                onClick={handleLoginWithGoogle}
              >
                <GoogleIcon /> Ingresar con Google
              </Button>
              <Box mt={2}>
                <Typography component="div">
                  ¿Aún no tenes cuenta?
                  <Typography
                    component="span"
                    sx={{ color: '#1daeff', ':hover': { cursor: 'pointer' } }}
                    onClick={handleChangeToRegister}
                  >
                    Registrate
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

export default LoginModal
