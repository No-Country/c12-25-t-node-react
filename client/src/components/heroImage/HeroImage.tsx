
import {Image} from "@mui/icons-material";
import heroImage from '../../assets/heroImage/heroImage.png'
import {Avatar} from "@mui/material";
const HeroImage = ()=> {
  return (
      <div className="banner-container">
          <img src={heroImage} alt="Mi Imagen" className="banner-image" />
      </div>
  )
}
export default HeroImage