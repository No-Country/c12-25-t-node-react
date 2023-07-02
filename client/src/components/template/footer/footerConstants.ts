export const YEAR = new Date().getFullYear()

export type textLink = {
  text: string,
  to: string
}

export const SERVICES: textLink[] = [
  {
    text: 'Compra',
    to: '/search'
  },
  {
    text: 'Alquiler',
    to: '/search'
  },
  {
    text: 'Alquiler temporario',
    to: '/search'
  }
]

export const COMPANY:  textLink[] = [
  {
    text: 'Quienes somos',
    to: '/about'
  },
  {
    text: 'Contacto',
    to: '/contact'
  }
]
