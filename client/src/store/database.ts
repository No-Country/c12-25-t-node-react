import { create } from 'zustand'
import { EstateDetail } from '../model/estate-detail'
import { getAllEstateDetails } from '../components/firebase/database'

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
      const estates = await getAllEstateDetails()
      set((state) => ({ ...state, estateDetails: estates }))
    } catch (error) {
      console.log(error)
    }
  }
}))
