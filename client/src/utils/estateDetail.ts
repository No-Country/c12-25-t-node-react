import { City, Type } from "../model/estate-detail"

export const estateDetail = {
  estate_datail_id: 1,
  name: "Casa de 5 ambientes en Villa Urquiza",
  description: "Casa de dos pisos con orientación oeste. Cuenta con 9 ambientes, gran living-comedor, cocina con doble mesada, lavadero espacioso , 2 baños completos, 5 dormitorios (dos de ellos con vestidor y balcón). Pisos de madera en combinación con porcelanato, aberturas de aluminio anodizado, cortina de enrollar en dormitorios, placares completos con interiores, calefacción prevista para colocación de estufa y agua caliente por termotanque a gas. Cocina con gran espacio de mesada en granito, bacha de acero inoxidable, cocina a gas instalada, mobiliario completo de bajo mesada más alacena, purificador y espacio técnico para heladera, microondas y lavarropas. Baños con ventilación natural, loza sanitaria y griferías de primeras marcas, vanitory incorporado con espejo y accesorios colocados, bañera y revestimiento en paredes. Jardín arbolado con cítricos y amplio espacio para incorporar pileta y asador.",
  zone: "Esta propiedad se encuentra situada en Villa Urquiza, un histórico barrio residencial que complementa su vida familiar, con una amplia oferta comercial, gastronómica y recreativa. Ubicado estrategicamente a una cuadra de plaza Zapiola y a cinco cuadras de la estación Juan Manuel de Rosas de la línea B de subterráneos, el inmueble posee gran conectividad con toda la ciudad.",
  address: "Av. Monroe 4511",
  city: City.villaUrquiza,
  province: "Capital Federal",
  country: "Argentina",
  price: 360000,
  available: true,
  covered_area: 600,
  uncovered_area: 80,
  bedrooms: 5,
  bathrooms: 2,
  toilette: 1,
  garage: 1,
  swimming_pool: 1,
  reception_hall: 0,
  balcony: 1,
  elevator: 0,
  gym: 0,
  antiquity: 3,
  estate_id: 1,
  garden: true,
  terrace: true,
  grill: 0,
  credit_worthy: true,
  professional_use: false,
  estate_photos: [
    {
      estate_photo_id: 1,
      url: "https://firebasestorage.googleapis.com/v0/b/appartamentos-b4240.appspot.com/o/casa-1.jpg?alt=media&token=384a97af-a1ac-4e2a-bd0b-62ceecc0a1a0",
      alt: "Frente de la casa con techo de chapa y detalles en ladrillo"
    },
    {
      estate_photo_id: 2,
      url: "https://lirp.cdn-website.com/18faa34f/dms3rep/multi/opt/home+window+tinting+benefits-1920w.jpg",
      alt: ""
    },
    {
      estate_photo_id: 3,
      url: "https://static.wixstatic.com/media/dff192_4f952f4f77bc4e418034bf2c58022e3b~mv2.jpg/v1/fill/w_720,h_480,al_c,lg_1,q_80,enc_auto/dff192_4f952f4f77bc4e418034bf2c58022e3b~mv2.jpg",
      alt: ""
    }
  ],
  services: {
    agua: true,
    electricidad: true,
    telefono: true,
    gas: true,
    internet: true,
    alarma: true,
    ascensor: false
  },
  rooms: {
    cocina: 1,
    comedor: 1,
    living: 1,
    baños: 2,
    dormitorios: 5,
    toilet: 1,
    garage: 2,
    terraza: 1,
    pileta: 1,
    jardin: 1,
    SUM: 0
  },
  property_type: Type.casa,
  for_rent: true,
  for_sale: false,
  is_feature: true
}
