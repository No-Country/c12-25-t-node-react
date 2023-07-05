import { Grid } from '@mui/material'

type HeroImageProps = {
    imgSrc: string | undefined
    imgHeight?: string
}

const HeroImage: React.FC<HeroImageProps> = ({ imgSrc, imgHeight }) => {
    return (
        <Grid sx={ {
            height: `${ imgHeight ? imgHeight : '50vh' }`,
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        } }>
        </Grid>
    )
}

export default HeroImage