import PrimaryButton from "../components/atom/PrimaryButton";
import FeaturedForSaleCard from "../components/molecule/FeaturedForSaleCard";

type HomeProps = {
  /* aca van las props, ej:
  title: string
  Y luego se desestructuran en:
  const Home: React.FC<HomeProps> = ({title}) => {
  */
};

const Home: React.FC<HomeProps> = () => {
  return (
    <main>
      <PrimaryButton text="Home" />
      <FeaturedForSaleCard />
    </main>
  );
};

export default Home;
