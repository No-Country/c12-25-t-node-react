import { ReactNode } from 'react'
import {
  Box,
  Paper,
} from '@mui/material'
import './BannerAndBackGroundPage.styles.css'
import HeroImage from '../../atom/heroImage/HeroImage'

type BannerAndBackgroundPageProps = {
  children?: ReactNode
  imgSrc: string
}

const BannerAndBackgroundPage: React.FC<BannerAndBackgroundPageProps> = ({
  imgSrc,
  children
}) => {
  return (
    <main className="banner-background-page">
      <HeroImage
        imgSrc={ imgSrc }
        imgHeight="400px"
      />
      { children }
    </main>
  )
}

export default BannerAndBackgroundPage