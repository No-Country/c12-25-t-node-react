import { useState, useEffect } from 'react';
import 'firebase/auth';
import { collection, getDoc, doc, getFirestore, DocumentData } from 'firebase/firestore';
import { User, getAuth } from 'firebase/auth';
import BannerAndBackgroundPage from '../components/molecule/banner-background-page/BannerAndBackgroundPage';
import BackButton from '../components/atom/BackButton';
import CardsWithPagination from '../components/template/CardsWithPagination';
import favoriteBanner from '../assets/favorite-banner.png'
import { EstateDetail } from '../model/estate-detail';

type FavoritesProps = {
}

interface UserFavoriteData {
  favoriteIds: string[];
}


const Favorites = () => {
  const db = getFirestore();

  const [favoriteObjects, setFavoriteObjects] = useState<EstateDetail[]>([]);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (user) {
      getUserFavorites(user.uid)
        .then((favoriteIds) => getFavoriteObjects(favoriteIds))
        .then((favoriteObjects) => setFavoriteObjects(favoriteObjects))
        .catch((error) => console.error('Error al obtener objetos favoritos:', error));
    }
  }, [user]);

  async function getUserFavorites(userId: string) {
    try {
      const userFavoritesRef = doc(collection(db, 'usersFavorites'), userId);
      const userFavoritesDoc = await getDoc(userFavoritesRef);

      if (userFavoritesDoc.exists()) {
        const userFavoriteData = userFavoritesDoc.data() as UserFavoriteData;
        return userFavoriteData.favoriteIds || [];
      } else {
        return [];
      }
    } catch (error) {
      throw error;
    }
  }

  async function getFavoriteObjects(favoriteIds: string[]) {
    try {
      const favoriteObjects: EstateDetail[] = [];
  
      for (const id of favoriteIds) {
        const objectRef = doc(collection(db, 'estates_detail'), String(id));
        const objectDoc = await getDoc(objectRef);
  
        if (objectDoc.exists()) {
          const objectData = objectDoc.data() as EstateDetail;
          favoriteObjects.push(objectData);
        }
      }
  
      console.log('favoriteObjects:', favoriteObjects); // Agrega esta línea para verificar el contenido
      return favoriteObjects;
    } catch (error) {
      throw error;
    }
  }

  return (
    <>
      <BackButton />
      <BannerAndBackgroundPage imgSrc={favoriteBanner} imgHeight="350px"/>
      <CardsWithPagination list={favoriteObjects}/>
    </>
  );
};

export default Favorites;
