import fs from 'fs'
import { initializeApp } from 'firebase/app'
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  getDoc,
} from 'firebase/firestore'
import { EstateDetail } from '../../model/estate-detail'

const firebaseConfig = {
  apiKey: 'AIzaSyCLLOIX4MaV_d-b7PKsaNqI3l5FJERk5HU',
  authDomain: 'appartamentos-b4240.firebaseapp.com',
  projectId: 'appartamentos-b4240',
  storageBucket: 'appartamentos-b4240.appspot.com',
  messagingSenderId: '11991668985',
  appId: '1:11991668985:web:3784120d874379d8292a28',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const estatesDetailCollection = collection(db, 'estates_detail')

async function getAllEstateDetails(): Promise<EstateDetail[]> {
  try {
    const querySnapshot = await getDocs(estatesDetailCollection)
    const estateDetails: EstateDetail[] = []

    querySnapshot.forEach((doc) => {
      const estateDetail = doc.data() as EstateDetail
      estateDetails.push(estateDetail)
    })

    return estateDetails
  } catch (error) {
    console.error('Error al obtener los datos:', error)
    return []
  }
}

async function getEstateDetailById(estateId: number): Promise<EstateDetail | null> {
  try {
    const estateRef = doc(estatesDetailCollection, estateId.toString())

    const documentSnapshot = await getDoc(estateRef)

    if (documentSnapshot.exists()) {
      const estateDetail = documentSnapshot.data() as EstateDetail
      return estateDetail
    } else {
      console.log('El documento no existe.')
      return null
    }
  } catch (error) {
    console.error('Error al obtener el documento:', error)
    return null
  }
}

// fs.readFile("C:/Users/romer/OneDrive/Escritorio/No-country/c12-25-t-node-react/client/src/api/state-detail-mock.json", "utf8", async (err, data) => {
//   if (err) {
//     console.error("Error al leer el archivo JSON:", err)
//     return
//   }

//   try {
//     const jsonData = JSON.parse(data);
//     async function uploadDataToFirestore() {
//       try {
//         for (const estateDetail of jsonData.estates_detail) {
//           const estateId = estateDetail.estate_datail_id
//           // Utilizar el método "setDoc" para agregar un nuevo documento a la colección "estates_detail"
//           await setDoc(doc(estatesDetailCollection, estateId.toString()), estateDetail);
//           console.log("Documento subido con el ID:", estateId);
//         }
//         console.log("Todos los datos se subieron correctamente a Firestore.");
//       } catch (error) {
//         console.error("Error al subir los datos a Firestore:", error);
//       }
//     }

//     uploadDataToFirestore();
//   } catch (error) {
//     console.error("Error al analizar el archivo JSON:", error);
//   }
// });

export { getAllEstateDetails, getEstateDetailById }
