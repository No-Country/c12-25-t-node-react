import { Grid } from '@mui/material'

type HeroImageProps = {
  imgSrc: string | undefined
  imgHeight?: string
}

/**
 * HeroImage it's the component to display the picture
 * at the Home Hero Image section
 * @props imgSrc: the image source
 * @props imgHeight: the height of the image to be display, by default it's 50vh, as it's an optional prop
 */
const HeroImage: React.FC<HeroImageProps> = ({ imgSrc, imgHeight }) => {
  return (
    <Grid
      sx={ {
        height: `${ imgHeight ? imgHeight : '50vh' }`,
        backgroundImage: `url(${ imgSrc })`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      } }
    ></Grid>
  )
}

export default HeroImage
