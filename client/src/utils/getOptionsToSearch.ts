import { EstateDetail } from '../model/estate-detail'
import { estatesDetailList } from '../utils/EstatesDetailsList'

type KeyOfEstateDetail = keyof EstateDetail

export const getOptionsToSearch = (
  key: KeyOfEstateDetail,        
): any[] => {
    // A Set to store the unique values of the object keys 
    const uniqueValuesSet = new Set()
    estatesDetailList.forEach((estate) => {
      // Get the value of an specific key and add to Set
      uniqueValuesSet.add(estate[key])
    })
    // Transformt the Set into an array
    const uniqueValuesArray = Array.from(uniqueValuesSet)

  return uniqueValuesArray.sort()
}


