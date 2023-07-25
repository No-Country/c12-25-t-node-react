import { useState, useEffect } from 'react'
import { EstateDetail } from '../model/estate-detail'

type KeyOfEstateDetail = keyof EstateDetail

const useOptionsToSearch = (
  key: KeyOfEstateDetail,
  estateDetails: EstateDetail[]
): any[] => {
  const [uniqueValues, setUniqueValues] = useState<any[]>([])

  useEffect(() => {
    // A Set to store the unique values of the object keys 
    const uniqueValuesSet = new Set()
    estateDetails.forEach((estate) => {
      // Get the value of an specific key and add to Set
      uniqueValuesSet.add(estate[key])
    })

    // Transformt the Set into an array
    const uniqueValuesArray = Array.from(uniqueValuesSet)
    // Update state
    setUniqueValues(uniqueValuesArray)
  }, [key, estateDetails])

  return uniqueValues.sort()
}

export default useOptionsToSearch
