import * as yup from 'yup'
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).{6,15}$/

export const loginSchema = yup.object().shape({
  emailLoginInput: yup
    .string()
    .email('Ingrese una dirección de email válida')
    .required('Campo requerido'),
})

export const registerSchema = yup.object().shape({
  emailRegisterInput: yup
    .string()
    .email('Dirección de email inválida.')
    .required('Campo requerido'),
  firstNameRegisterInput: yup.string().max(15).required('Campo requerido'),
  lastNameRegisterInput: yup.string().max(15).required('Campo requerido'),
  passwordRegisterInput: yup
    .string()
    .matches(passwordRegex, {
      message: 'La contraseña no cumple los requisitos.',
    })
    .required('Campo requerido'),
  passwordRegisterInput2: yup
    .string()
    .oneOf([yup.ref('passwordRegisterInput')], 'Las contraseñas no coinciden')
    .required('Campo requerido'),
})
