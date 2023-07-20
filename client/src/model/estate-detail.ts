export type EstatesDetail = {
  estates_detail: EstateDetail[]
}

export type EstateDetail = {
  estate_datail_id: number
  name: string
  description: string
  zone: string
  city: City
  province: Province
  country: Country
  price: number
  available: boolean
  covered_area: number
  uncoverd_area: number
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
  state_id: number
  garden: boolean
  terrance: boolean
  grill: number
  credit_worthy: boolean
  professional_use: boolean
  estate_photos: EstatePhoto[]
  services: Services
  rooms: { [key: string]: number }
}

export enum Country {
  Argentina = "Argentina",
}

export enum Province {
  CapitalFederal = "Capital Federal",
}

export enum City {
  VillaUrquiza = "Villa Urquiza",
  Caballito = "Caballito",
  Palermo = "Palermo",
  Belgrano = "Belgrano"
}

export type Services = {
  agua: boolean
  eletricidad: boolean
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