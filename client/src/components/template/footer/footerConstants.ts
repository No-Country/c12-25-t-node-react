export const YEAR = new Date().getFullYear()

export type textLink = {
  text: string,
  to: string,
  ariaLabel: string
}

export const SERVICES: textLink[] = [
  {
    text: 'Compra',
    to: '/search',
    ariaLabel:'página de busqueda de propiedades en venta'
  },
  {
    text: 'Alquiler',
    to: '/search',
    ariaLabel:'página de busqueda de propiedades en alquiler'
  }
]

export const COMPANY:  textLink[] = [
  {
    text: 'Quienes somos',
    to: '/about',
    ariaLabel:'página de quienes somos'
  },
  {
    text: 'Contacto',
    to: '/contact',
    ariaLabel:'página de contacto'
  }
]
