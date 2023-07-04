import HeroImage from '../components/atom/heroImage/HeroImage'
import termsAndConditionBanner from '../assets/terms-condition-banner.png'

type TermsConditionsProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const TermsConditions: React.FC<TermsConditionsProps> = ({title}) => {
  */
}

const TermsConditions: React.FC<TermsConditionsProps> = () => {
  return (
    <main>
      <HeroImage
        imgSrc={ termsAndConditionBanner }
        imgHeight="23vh"
      />
    </main>
  )
}

export default TermsConditions