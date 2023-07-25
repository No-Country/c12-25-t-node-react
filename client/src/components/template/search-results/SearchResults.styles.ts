export const stylesSearchResults = {
  list: {
    width: '100%',
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    bgcolor: 'background.paper',
    position: 'relative',
    top: '-50px',
    borderRadius: '7px',
    boxShadow: '0px 4px 10px grey',
    padding: '8px',
  },
  totalList: {
    color: 'var(--primary-darker)',
    fontWeight: '500',
  },
  totalListSpan: {
    color: 'var(--primary-light)',
    fontWeight: '800',
    letterSpacing: '1px',
  },
  btnPrimary: {
    margin: '1rem auto',
    padding: { 
      xs: '0.5rem 1rem', 
      md: '6px 12px' 
    },
    width: { 
      xs: '260px', 
      sm: '350px', md: '20px'
     },
  }
}