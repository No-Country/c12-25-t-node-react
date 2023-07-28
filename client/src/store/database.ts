import { create } from 'zustand'
import { EstateDetail } from '../model/estate-detail'
import { estatesDetailList } from '../utils/EstatesDetailsList'
interface EstateDetailsState {
  estateDetails: EstateDetail[]
  open: boolean
  setOpen: (open: boolean) => void
  getEstateDetails: () => void
}

export const useEstateDetails = create<EstateDetailsState>((set) => ({
  estateDetails: [],
  open: false,
  setOpen: (open) => set({ open }),
  getEstateDetails: async () => {
    try {
      let estateDetails: EstateDetail[] = []
      estatesDetailList.map((estate) => {
        estateDetails.push(estate)
      })
      return estateDetails
    } catch (error) {
      console.log(error)
    }
  },
}))
