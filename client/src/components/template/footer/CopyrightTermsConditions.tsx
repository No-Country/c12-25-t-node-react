import { Link } from 'react-router-dom'
import {
  Grid,
  Typography
} from '@mui/material'
import { YEAR } from './footerConstants'

type CopyrightTermsConditionsProps = {
}

const CopyrightTermsConditions: React.FC<CopyrightTermsConditionsProps> = () => {
  return (
    <Grid container spacing={ 2 } sx={ { padding: '1rem 0rem 1.75rem' } }>
      <Grid item xs={ 12 } sm={ 8 }>
        <Typography>Appartamentos S.A. - Todos los derechos reservados  &#169;{ YEAR }</Typography>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <Typography>
          <Link
            to="/terms-conditions"
            className="links-footer"
            aria-label="página de término y condiciones"
          >
            Términos y condiciones de uso
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default CopyrightTermsConditions