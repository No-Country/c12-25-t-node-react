import { useState, useEffect } from 'react'
import { EstateDetail } from '../model/estate-detail'

type KeyOfEstateDetail = keyof EstateDetail

const useOptionsToSearch = (key: KeyOfEstateDetail, estateDetails: EstateDetail[]): any[] => {
  const [uniqueValues, setUniqueValues] = useState<any[]>([]);

  useEffect(() => {
    // Creamos un Set para almacenar los valores únicos de la clave
    const uniqueValuesSet = new Set()
    // Iteramos sobre el array de objetos EstateDetail
    estateDetails.forEach((estate) => {
      // Obtenemos el valor de la clave específica y lo agregamos al Set
      uniqueValuesSet.add(estate[key])
    })

    // Convertimos el Set a un array
    const uniqueValuesArray = Array.from(uniqueValuesSet)
    // Actualizamos el estado con los valores únicos de la clave
    setUniqueValues(uniqueValuesArray)
  }, [key])

  return uniqueValues
}

export default useOptionsToSearch 