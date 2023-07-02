import { Grid, List, ListItem, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'
import { COMPANY, INFO, SERVICES } from './footerConstants'
import FooterSubtitle from './FooterSubtitle'

type LinksInfoMediaProps = {
}

const LinksInfoMedia: React.FC<LinksInfoMediaProps> = () => {
  return (
    <Grid container spacing={ 2 }
      sx={ {
        borderBottom: '2px solid #010108',
        paddingBottom: '1rem'
      } }
    >
      <Grid item xs={ 12 } sm={ 4 }>
        <FooterSubtitle title="servicios" />
        <List>
          { SERVICES && SERVICES.map(
            service => <ListItem key={ service.text }>
              <Link to={ service.to } className="links-footer">{ service.text }</Link>
            </ListItem>)
          }
        </List>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <FooterSubtitle title="empresa" />
        <List>
          { COMPANY && COMPANY.map(
            company => <ListItem key={ company.text }>
              <Link to={ company.to } className="links-footer">{ company.text }</Link>
            </ListItem>)
          }
        </List>
      </Grid>
      <Grid item xs={ 12 } sm={ 4 }>
        <FooterSubtitle title="información" />
        <List>
          { INFO && INFO.map(
            info => <ListItem key={ info.text }>{ info.icon }{ info.text }</ListItem>)
          }
        </List>
      </Grid>
    </Grid>
  )
}

export default LinksInfoMedia