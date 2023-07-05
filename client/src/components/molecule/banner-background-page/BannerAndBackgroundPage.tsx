import { ReactNode } from 'react'
import {
  Box,
  Paper,
} from '@mui/material'
import './BannerAndBAckGroundPage.styles.css'
import HeroImage from '../../atom/heroImage/HeroImage'

type BannerAndBackgroundPageProps = {
  children?: ReactNode
  paperMinHeight?: string
  imgSrc: string
}

const BannerAndBackgroundPage: React.FC<BannerAndBackgroundPageProps> = ({
  imgSrc,
  paperMinHeight,
  children
}) => {
  return (
    <main className="banner-background-page">
      <HeroImage
        imgSrc={ imgSrc }
        imgHeight="400px"
      />
      <Box
        sx={ {
          width: '80%',
          maxWidth: '800px',
          margin: '2rem auto',
          position: 'relative',
          top: '-290px',
        } }
      >
        <Paper
          elevation={ 8 }
          sx={ {
            borderRadius: '1rem',
            padding: '1rem 0rem 1.75rem',
            minHeight: `${ paperMinHeight ? paperMinHeight : '300px' }`
          } }
        >
          { children }
        </Paper>
      </Box>
    </main>
  )
}

export default BannerAndBackgroundPage