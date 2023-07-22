import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  ButtonProps
} from '@mui/material'
import { colorBtn, variantBtn } from '../../utils/types'

interface BackButtonProps extends ButtonProps {
  variant?: variantBtn
  colorBtn?: colorBtn
}

const BackButton: React.FC<BackButtonProps> = ({
  variant,
  colorBtn,
  ...props
}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <Box
      sx={ { padding: '1rem 1.25rem', position: 'absolute', zIndex: '2'} }
    >
        <Button
          variant={ variant ? variant : 'contained' }
          size='medium'
          color={ colorBtn ? colorBtn : 'primary' }
          sx={ {
            padding: '8px 16px',
            borderRadius: '16px',
            margin: '5rem 0rem 1rem'
          } }
          onClick={ handleClick }
          aria-label='Volver a la página anterior'
          { ...props }
        >
          Volver
        </Button>
    </Box>
  )
}

export default BackButton
