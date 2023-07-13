import { ReactNode } from 'react'
import { Box } from '@mui/material'
import HeroImage from '../../atom/heroImage/HeroImage'

type BannerAndBackgroundPageProps = {
  imgSrc: string,
  imgHeight?: string
  children?: ReactNode
}

const BannerAndBackgroundPage: React.FC<BannerAndBackgroundPageProps> = ({
  imgSrc,
  imgHeight,
  children
}) => {
  return (
    <Box sx={ { background: '#F1F1F9' } }>
      <HeroImage
        imgSrc={ imgSrc }
        imgHeight={ `${ imgHeight ? imgHeight : '460px' }` }
      />
      { children }
    </Box>
  )
}

export default BannerAndBackgroundPage