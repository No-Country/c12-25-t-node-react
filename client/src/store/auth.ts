import { create } from 'zustand'
import {
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { auth, googleProvider } from '../components/firebase/firebase'

interface UserState {
  user: UserCredential | null
  user_id: string
  errorRegister: string | null
  login: (email: string, password: string) => void
  loginWithGoogle: () => void
  register: (email: string, password: string) => void
  logout: () => void
  clearError: () => void
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  user_id: '',
  errorRegister: '',
  login: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      )
      set({ user: userCredential, user_id: userCredential.user.uid })
      localStorage.setItem('user', userCredential.user.uid)
    } catch (error: any) {
      console.error(error.code)
      throw Error(error.code)
    }
  },
  loginWithGoogle: async () => {
    try {
      const userCredential = await signInWithPopup(auth, googleProvider)
      set({ user: userCredential, errorRegister: null })
      localStorage.setItem('user', userCredential.user.uid)
    } catch (error: any) {
      console.error('Error al iniciar sesión con Google:', error)
      set({
        errorRegister:
          'Ha ocurrido un error al iniciar sesión con Google. Por favor, inténtalo de nuevo.',
      })
      throw Error(error.code)
    }
  },
  register: async (email, password) => {
    set({ errorRegister: '' })
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      set({ user: userCredential, errorRegister: null })
    } catch (error: any) {
      set({ errorRegister: error.code })
      console.log(error)
      throw Error(error.code)
    }
  },
  logout: () => {
    signOut(auth)
    set(() => ({ user: null, user_id: '', errorRegister: '' })),
      localStorage.clear()
  },
  clearError: () => {
    set({ errorRegister: '' })
  },
}))
