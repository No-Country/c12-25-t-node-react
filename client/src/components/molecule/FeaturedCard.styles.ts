export const stylesFeaturedCard = {
  card: { 
    maxWidth: 350, 
    height: 396, 
    borderRadius: 5, 
    boxShadow: '0px 4px 10px grey' 
  },
  cardMedia: { 
    height: 200, 
    objectFit: 'cover' 
  },
  cardContext: { 
    position: 'relative', 
    pb: 0 
  },
  iconButton: {
    position: 'absolute',
    right: -1,
    top: -180,
    marginRight: 1,
    backgroundColor: 'white',
    borderRadius: 3,
  },
  primaryButton: {
    position: 'absolute',
    top: -20,
    right: -1,
    marginRight: 4,
    display: 'inline-block',
    fontSize: '0.8rem',
    letterSpacing: '1px',
  },
  box: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
}