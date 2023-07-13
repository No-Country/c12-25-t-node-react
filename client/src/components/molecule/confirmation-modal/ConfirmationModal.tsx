import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from '@mui/material'
import dayjs from 'dayjs'
import Subtitle from '../../atom/Subtitle'
import PrimaryButton from '../../atom/PrimaryButton'

type ConfirmationModalProps = {
  selectedDate: dayjs.Dayjs
  openDialog: boolean
  handleCloseDialog: () => void
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  selectedDate,
  openDialog,
  handleCloseDialog
}) => {
  return (
    <Dialog open={ openDialog } onClose={ handleCloseDialog } sx={ { padding: '1rem 0.5rem' } }>
      <DialogTitle>
        <Subtitle
          title="Confirmación de la Solicitud de Reunión"
          padding="2rem 1rem 0.25rem"
        />
      </DialogTitle>
      <DialogContent>
        <Box sx={ { padding: '0.5rem 1.75rem' } }>
          <Typography sx={ { marginBottom: '0.75rem' } }> La solicitud de reunión para el día { selectedDate && dayjs(selectedDate).format('DD/MM/YYYY') } ha sido enviada.</Typography>
          <Typography>¡Gracias por tu interés en reunirte con nosotros!</Typography>
        </Box>
      </DialogContent>
      <DialogActions sx={ { padding: '1rem' } }>
        <PrimaryButton text="Cerrar" onClick={ handleCloseDialog } />
      </DialogActions>
    </Dialog>
  )
}

export default ConfirmationModal