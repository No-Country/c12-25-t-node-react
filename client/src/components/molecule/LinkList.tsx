import { Link } from 'react-router-dom'
import {
  List,
  ListItem,
} from '@mui/material'
import { textLink } from '../template/footer/footerConstants'


type LinkListProps = {
  list?: textLink[]
}

const LinkList: React.FC<LinkListProps> = ({ list }) => {
  return (
    <List>
      { list && list.map(
        item => <ListItem key={ item.text }>
          <Link to={ item.to } className="links-footer" aria-label={ item.ariaLabel }>
            { item.text }
          </Link>
        </ListItem>)
      }
    </List>
  )
}

export default LinkList