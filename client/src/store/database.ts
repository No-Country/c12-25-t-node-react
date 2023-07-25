import create from 'zustand'
import { EstateDetail } from '../model/estate-detail'
import { getAllEstateDetails } from '../components/firebase/database'
import { useEffect } from 'react'
import { useSpinner } from '../context/SpinnerProvider'

interface EstateDetailsState {
  estateDetails: EstateDetail[]
  open: boolean
  setOpen: (open: boolean) => void
  addEstateDetails: (details: EstateDetail[]) => void
}

const useEstateDetailsStore = create<EstateDetailsState>((set) => ({
  estateDetails: [],
  open: false,
  setOpen: (open) => set({ open }),
  addEstateDetails: (details) =>
    set((state) => ({ estateDetails: [...state.estateDetails, ...details] })),
}))

export function useEstateDetails() {
  const { estateDetails, open, setOpen, addEstateDetails } =
    useEstateDetailsStore()
  const { addLoading, removeLoading } = useSpinner()

  const handleClickAlert = () => setOpen(true)

  useEffect(() => {
    const fetchEstateDetails = async () => {
      addLoading()
      try {
        const details = await getAllEstateDetails()
        addEstateDetails(details)
      } catch (error) {
        handleClickAlert()
      } finally {
        removeLoading()
      }
    }
    fetchEstateDetails()
  }, [addEstateDetails])

  return { estateDetails, open, setOpen }
}
