import { create } from 'zustand'
import { EstateDetail } from '../model/estate-detail'
import { getAllEstateDetails } from '../components/firebase/database'

interface EstateDetailsState {
  estateDetails: EstateDetail[]
  open: boolean
  setOpen: (open: boolean) => void
  //addEstateDetails: (details: EstateDetail[]) => void
  getEstateDetails: () => void
}
// export const useEstateDetails = create<EstateDetailsState>((set) => ({
//   estateDetails: [],
//   open: false,
//   setOpen: (open) => set({ open }),
//   addEstateDetails: async () => {
//     const { addLoading, removeLoading } = useSpinner()
//     try {
//       addLoading()
//       const estateDetails = await getAllEstateDetails()
//       set({ estateDetails: estateDetails })
//       removeLoading()
//     } catch (error) {
//       console.log(error)
//     }
//   },
// }))
export const useEstateDetails = create<EstateDetailsState>((set) => ({
  estateDetails: [],
  open: false,
  setOpen: (open) => set({ open }),
  getEstateDetails: async () => {
    //const { addLoading, removeLoading } = useSpinner()
    try {
      //addLoading()
      const estates = await getAllEstateDetails()
      set((state) => ({ ...state, estateDetails: estates }))
      //removeLoading()
    } catch (error) {
      console.log(error)
    }
  },
  // addEstateDetails: (details) =>
  //   set((state) => ({ estateDetails: [...state.estateDetails, ...details] })),
}))

// export function useEstateDetails() {
//   const { estateDetails, open, setOpen, addEstateDetails } =
//     useEstateDetailsStore()
//   const { addLoading, removeLoading } = useSpinner()

//   const handleClickAlert = () => setOpen(true)

//   useEffect(() => {
//     const fetchEstateDetails = async () => {
//       addLoading()
//       try {
//         const details = await getAllEstateDetails()
//         addEstateDetails(details)
//       } catch (error) {
//         handleClickAlert()
//       } finally {
//         removeLoading()
//       }
//     }
//     fetchEstateDetails()
//   }, [addEstateDetails])

//   return { estateDetails, open, setOpen }
// }
