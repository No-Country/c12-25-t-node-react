import { useNavigate } from 'react-router-dom'
import {
  Box,
  Button,
  ButtonProps
} from '@mui/material'
import { colorBtn, variantBtn } from '../../utils/types'
import{ styleBackButton } from  './BackButton.styles'
interface BackButtonProps extends ButtonProps {
  variant?: variantBtn
  colorBtn?: colorBtn
}

/**
 * ackButton, a component to go to the previous page
 * @prop variant: by default it's contained, with a backgorund color,
 *  * it can be customized
 * @prop colorBtn: by default the background color of the button it's primary(blue),
 * it can be customized
 */
const BackButton: React.FC<BackButtonProps> = ({
  variant,
  colorBtn,
  ...props
}) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(-1)

  return (
    <Box sx={ styleBackButton.box } >
        <Button
          variant={ variant ? variant : 'contained' }
          size='medium'
          color={ colorBtn ? colorBtn : 'primary' }
          sx={ styleBackButton.button }
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
