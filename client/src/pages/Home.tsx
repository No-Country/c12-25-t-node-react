import { useState, useEffect } from 'react'
import mockApiData from '../api/mockApi.json'
import HeroImage from '../components/atom/heroImage/HeroImage.tsx'
import CallToActionContactForm from '../components/molecule/cta-contact-form/CallToActionContactForm.tsx'
import FeaturedAcordion from '../components/template/featuredAcordion/FeaturedAcordion.tsx'
import { Estates } from '../model/estates.ts'
import heroImageBanner from '../assets/heroImage.png'
import ImageCtaLeft from '../assets/imageCtaRight.png'
import ImageCtaRight from '../assets/imageCtaLeft.png'
import Searcher from '../components/Searcher.tsx'
import { useSpinner } from '../context/SpinnerProvider.tsx' // para Loader
import { EstateDetail } from '../model/estate-detail.ts'
import { getAllEstateDetails } from '../components/firebase/database.ts'

type HomeProps = {}

const Home: React.FC<HomeProps> = () => {
  // Ejemplo de como usar el loader cuando hacemos un fetch
  // const { addLoading, removeLoading} = useSpinner()
  // useEffect(() => {
  //  const hagoFetch = async () => {
  //     addLoading()
  //     try {
  //     } catch(err) {
  //        //aca hay que mostrar error
  //     } finally {
  //      removeLoading()
  //     }
  //   }
  //   hagoFetch()
  // }, [])
  
  // const [estateDetails, setEstateDetails] = useState<EstateDetail[]>([]);
  // const { addLoading, removeLoading } = useSpinner();

  // useEffect(() => {
  //   const fetchEstates = async () => {
  //     addLoading();
  //     try {
  //       const allEstates = await getAllEstateDetails();
  //       setEstateDetails(allEstates);
  //     } catch (error) {
  //       console.error('Error al obtener las propiedades:', error);
  //     } finally {
  //       removeLoading();
  //     }
  //   };

  //   fetchEstates();
  // }, [addLoading, removeLoading]);

  return (
    <main>
      <HeroImage imgSrc={heroImageBanner} />
      <Searcher />
      {/* Aquí pasamos el estateDetails completo, ya que el filtrado se hace en el componente FeaturedAcordion */}
      <FeaturedAcordion textTitle="venta" />
      <FeaturedAcordion textTitle="alquiler" />
      <CallToActionContactForm imageUrl={ImageCtaLeft} textPosition={'left'} />
      <CallToActionContactForm imageUrl={ImageCtaRight} textPosition={'right'} />
    </main>
  );
};


export default Home
