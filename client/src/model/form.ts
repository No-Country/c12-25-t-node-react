export interface FormDetail {
  fullName: string
  phone: string
  email: string
  message: string
}

export interface FormError {
  fullName: string
  phone: string
  email: string
  message: string
}

export const InitialState = {
  fullName: '',
  phone: '',
  email: '',
  message: ''
}   