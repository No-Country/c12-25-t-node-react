import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCLLOIX4MaV_d-b7PKsaNqI3l5FJERk5HU',
  authDomain: 'appartamentos-b4240.firebaseapp.com',
  projectId: 'appartamentos-b4240',
  storageBucket: 'appartamentos-b4240.appspot.com',
  messagingSenderId: '11991668985',
  appId: '1:11991668985:web:3784120d874379d8292a28',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { auth, googleProvider }
