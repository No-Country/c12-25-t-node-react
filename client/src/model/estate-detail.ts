export type EstatesDetail = {
  estates_detail: EstateDetail[]
}

export type EstateDetail = {
  estate_datail_id: number
  name: string
  description: string
  zone: string
  address: string
  city: string | City
  province: string | Province
  country: string | Country
  price: number
  available: boolean
  covered_area: number
  uncovered_area: number
  bedrooms: number
  bathrooms: number
  toilette: number
  garage: number
  swimming_pool: number
  reception_hall: number
  balcony: number
  elevator: number
  gym: number
  antiquity: number
  estate_id: number
  garden: boolean
  terrace: boolean
  grill: number
  credit_worthy: boolean
  professional_use: boolean
  estate_photos: EstatePhoto[]
  services: Services
  rooms: { [key: string]: number }
  property_type: string | Type
  for_rent: boolean
  for_sale: boolean
}

export enum Country {
  Argentina = "Argentina",
}

export enum Province {
  CapitalFederal = "Capital Federal",
}

export enum City {
  agromonia = "Agronomía",
  almagro = "Almagro",
  balvanera = "Balvanera",
  barracas = "Barracas",
  belgrano = "Belgrano",
  boedo = "Boedo",
  caballito = "Caballito",
  palermo = "Palermo",
  villaUrquiza = "Villa Urquiza"
}

export type Services = {
  agua: boolean
  electricidad: boolean
  telefono: boolean
  gas: boolean
  internet: boolean
  alarma: boolean
  ascensor: boolean
}

export type EstatePhoto = {
  estate_photo_id: number
  url: string
  alt: string
}

export enum Type {
  casa = "Casa",
  departamento = "Departamento",
  ph = "PH"
}

export enum Operation {
  compra = 'Compra',
  venta = 'Venta'
}

export enum Room {
  uno,
  dos,
  tres,
  cuatro,
  cinco,
  seis 
}